import React, { Component } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

export default class Cart extends Component {
  static navigationOptions = {
    title: 'Carrinho',
  };

  render() {
    return (
      <Container>
        <Text>Cart</Text>
      </Container>
    );
  }
}
