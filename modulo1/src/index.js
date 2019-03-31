import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';

import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

import Todo from '~/components/Todo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class App extends Component {
  state = {
    usuario: 'Giovani Generali',
    todos: [{ id: 0, text: 'Fazer café' }, { id: 1, text: 'Estudar o GoNative' }],
  };

  addTodo = () => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, { id: Math.random(), text: 'Novo Todo' }],
    });
  };

  render() {
    const { todos, usuario } = this.state;
    return (
      <View style={styles.container}>
        <Text>{usuario}</Text>
        {todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Adicionar Todo" onPress={this.addTodo} />
      </View>
    );
  }
}
