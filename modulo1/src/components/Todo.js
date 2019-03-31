import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, StyleSheet, Platform,
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

const Todo = ({ title }) => (
  <View>
    {Platform.OS === 'ios' ? (
      <View>
        <Text>IOS</Text>
        <Text style={styles.text}>{title}</Text>
      </View>
    ) : (
      <View>
        <Text>Android</Text>
        <Text style={styles.text}>{title}</Text>
      </View>
    )}
  </View>
);

Todo.defaultProps = {
  title: 'Fazer alguma coisa!',
};

Todo.propTypes = {
  title: PropTypes.string,
};

export default Todo;
