import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, ActivityIndicator, FlatList, TouchableOpacity,
} from 'react-native';

import api from '~/services/api';

import Header from '~/components/Header';
import IssueItem from './IssueItem';

import styles from './styles';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    title: '',
    issues: [],
    filterActive: '',
    loading: false,
    refreshing: false,
    error: false,
  };

  async componentDidMount() {
    const { navigation } = this.props;

    this.setState({
      title: navigation.getParam('title'),
    });

    this.loadIssues('all');
  }

  loadIssues = async (filter) => {
    const { navigation } = this.props;

    this.setState({ loading: true, filterActive: filter });

    try {
      const { data: issues } = await api.get(
        `/repos/${navigation.getParam('full_name')}/issues?state=${filter}`,
      );

      this.setState({ issues, loading: false });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  };

  renderIssue = ({ item }) => <IssueItem issue={item} />;

  renderIssues = () => {
    const { issues, refreshing, filterActive } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.filterWrapper}>
          <TouchableOpacity style={styles.filterButton} onPress={() => this.loadIssues('all')}>
            <Text
              style={[
                styles.filterButtonText,
                filterActive === 'all' && styles.filterButtonTextActive,
              ]}
            >
              Todas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton} onPress={() => this.loadIssues('open')}>
            <Text
              style={[
                styles.filterButtonText,
                filterActive === 'open' && styles.filterButtonTextActive,
              ]}
            >
              Abertas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton} onPress={() => this.loadIssues('closed')}>
            <Text
              style={[
                styles.filterButtonText,
                filterActive === 'closed' && styles.filterButtonTextActive,
              ]}
            >
              Fechadas
            </Text>
          </TouchableOpacity>
        </View>

        {!issues.length && (
          <View style={styles.info}>
            <Text style={styles.infoMessage}>Nenhuma issue encontrada</Text>
          </View>
        )}

        <FlatList
          data={issues}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderIssue}
          onRefresh={() => {
            const { filterActive: filter } = this.state;
            this.loadIssues(filter);
          }}
          refreshing={refreshing}
        />
      </View>
    );
  };

  render() {
    const { title, loading, error } = this.state;

    return (
      <View style={styles.container}>
        <Header title={title} />

        {error && (
          <View style={styles.error}>
            <Text style={styles.errorMessage}>Não foi possível carregar as issues</Text>
          </View>
        )}

        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderIssues()}
      </View>
    );
  }
}
