import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository, navigation: { navigate } }) => (
  <TouchableOpacity
    onPress={() => navigate('Issues', { title: repository.name, full_name: repository.full_name })}
  >
    <View style={styles.repository} key={`${repository.id}`}>
      <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />
      <View style={styles.repositoryInfo}>
        <Text style={styles.repositoryName} numberOfLines={1} ellipsizeMode="tail">
          {repository.name}
        </Text>
        <Text style={styles.repositoryOwner} numberOfLines={1} ellipsizeMode="tail">
          {repository.owner.login}
        </Text>
      </View>
      <Icon style={styles.angleRight} name="angle-right" size={20} />
    </View>
  </TouchableOpacity>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(RepositoryItem);
