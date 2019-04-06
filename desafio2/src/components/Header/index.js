import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

import PropTypes from 'prop-types';

import {
  View, Text, StatusBar, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        routeName: PropTypes.string.isRequired,
      }),
    }).isRequired,
  };

  state = {
    goBackButton: false,
  };

  componentDidMount() {
    const { navigation } = this.props;

    if (navigation.state.routeName === 'Issues') {
      this.setState({ goBackButton: true });
    }
  }

  render() {
    const { title, navigation } = this.props;
    const { goBackButton } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {goBackButton && (
          <TouchableOpacity
            style={styles.goBackButton}
            onPress={() => {
              navigation.navigate('Repositories');
            }}
          >
            <Icon name="chevron-left" size={16} />
          </TouchableOpacity>
        )}
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
    );
  }
}

export default withNavigation(Header);
