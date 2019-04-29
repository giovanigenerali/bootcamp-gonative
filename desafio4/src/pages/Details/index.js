import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text } from 'react-native';

import Header from '~/components/Header';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container } from './styles';

const TabIcon = ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Details extends Component {
  // static navigationOptions = {
  //   tabBarIcon: TabIcon,
  // };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    console.tron.log('Product Id', id);
  }

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    return (
      <Container>
        <Header title="Detalhes do produto" />
        <Text>Detalhes do produto</Text>
        <Text>{`Product Id: ${id}`}</Text>
      </Container>
    );
  }
}
