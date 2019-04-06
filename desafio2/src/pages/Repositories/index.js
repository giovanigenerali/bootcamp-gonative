import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
  FlatList,
} from 'react-native';

import api from '~/services/api';

import Header from '~/components/Header';
import RepositoryItem from './RepositoryItem';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import { colors } from '~/styles';

export default class Repositories extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
    loadingButton: false,
    refreshing: false,
    error: '',
  };

  async componentDidMount() {
    // AsyncStorage.clear();
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const repositories = JSON.parse(await AsyncStorage.getItem('@Gitissues:repositories')) || [];

    this.setState({ repositories, refreshing: false });
  };

  addRepository = async () => {
    const { repositoryInput, repositories } = this.state;

    this.setState({
      loadingButton: true,
      error: '',
    });

    if (!repositoryInput) {
      this.setState({
        error: 'Preencha o repositório',
        loadingButton: false,
      });
      return;
    }

    if (repositories.find(repository => repository.full_name === repositoryInput)) {
      this.setState({
        loadingButton: false,
        error: 'Repositório já está adicionado',
      });
      return;
    }

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [repository, ...repositories],
        loadingButton: false,
        error: '',
      });

      await AsyncStorage.setItem(
        '@Gitissues:repositories',
        JSON.stringify([repository, ...repositories]),
      );
    } catch (err) {
      this.setState({
        loadingButton: false,
        error: 'Repositório não encontrado',
      });
    }
  };

  renderRepository = ({ item }) => <RepositoryItem repository={item} />;

  renderRepositories = () => {
    const { repositories, loadingButton, refreshing } = this.state;

    return !repositories.length && !!loadingButton ? (
      <Text>Nenhum repositorírio adicionado</Text>
    ) : (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderRepository}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { repositoryInput, loadingButton, error } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Gitissues" />

        <View style={styles.newRepository}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositório"
            underlineColorAndroid="transparent"
            value={repositoryInput}
            onChangeText={text => this.setState({ repositoryInput: text })}
            editable={!loadingButton}
          />
          <TouchableOpacity style={styles.button} onPress={this.addRepository}>
            {loadingButton ? (
              <ActivityIndicator size="small" color={colors.dark} />
            ) : (
              <Icon name="plus" size={20} style={styles.icon} />
            )}
          </TouchableOpacity>
        </View>

        {!!error && (
          <View style={styles.error}>
            <Text style={styles.errorMessage}>{error}</Text>
          </View>
        )}

        {loadingButton ? <ActivityIndicator /> : this.renderRepositories()}
      </View>
    );
  }
}
