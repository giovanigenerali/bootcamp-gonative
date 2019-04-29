import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text } from 'react-native';

import Header from '~/components/Header';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container } from './styles';

const TabIcon = ({ tintColor }) => <Icon name="shopping-cart" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Cart extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  render() {
    return (
      <Container>
        <Header title="Carrinho" />
        <Text>Cart</Text>
      </Container>
    );
  }
}
