import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text } from 'react-native';

import { Container } from './styles';

export default class Details extends Component {
  static navigationOptions = {
    title: 'Detalhe do produto',
  };

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
        <Text>Detalhes do produto</Text>
        <Text>{`Product Id: ${id}`}</Text>
      </Container>
    );
  }
}
