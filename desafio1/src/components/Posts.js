import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    marginTop: 20,
    marginHorizontal: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
  },
  postHeader: {
    borderColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  author: {
    fontSize: 12,
    color: '#333',
  },
});

const Post = ({ data }) => (
  <View style={styles.container}>
    <View style={styles.postHeader}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.author}>{data.author}</Text>
    </View>
    <Text style={styles.content}>{data.content}</Text>
  </View>
);

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;
