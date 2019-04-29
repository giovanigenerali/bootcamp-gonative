import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Menu from '~/components/Menu';
import ProductsList from '~/components/ProductsList';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container } from './styles';

const TabIcon = ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Home extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  render() {
    return (
      <Container>
        <Header title="GoCommerce" />
        <Menu />
        <ProductsList />
      </Container>
    );
  }
}
