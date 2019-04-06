import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import 'moment/locale/pt-br';

import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

console.tron.log(moment.locale());

const IssueItem = ({ issue }) => (
  <TouchableOpacity onPress={() => Linking.openURL(issue.html_url)}>
    <View style={styles.issue} key={`${issue.id}`}>
      <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
      <View style={styles.issueInfo}>
        <Text style={styles.issueTitle} numberOfLines={1} ellipsizeMode="tail">
          {issue.title}
        </Text>
        <Text style={styles.issueUser}>
          {`Criada por ${issue.user.login} ${moment(issue.created_at).fromNow()}`}
        </Text>
      </View>
      <Icon style={styles.externalLink} name="external-link" size={16} />
    </View>
  </TouchableOpacity>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    user: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  }).isRequired,
};

export default IssueItem;
