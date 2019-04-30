import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Menu from '~/components/Menu';
import ProductsList from '~/components/ProductsList';

import { Container } from './styles';

export default class Home extends Component {
  static navigationOptions = {
    title: 'GoCommerce',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  render() {
    return (
      <Container>
        <Menu />
        <ProductsList />
      </Container>
    );
  }
}
