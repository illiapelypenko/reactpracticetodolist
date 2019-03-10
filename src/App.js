import styled from 'styled-components';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodoForm from './components/AddTodoForm';

export const { Provider, Consumer } = React.createContext();

const AppWrapper = styled.section`
  background: #f4f4f4;
  max-width: 800px;
  margin: 100px auto;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 2px;
`;

class App extends Component {
  state = {
    todos: [
      {
        id: '0',
        task: 'To clean my room',
        description: 'To clean my room especially a windows'
      },
      {
        id: '1',
        task: 'To watch a react vids',
        description: 'To watch last section'
      },
      {
        id: '2',
        task: 'To learn German',
        description: 'To learn 12-s section'
      },
      {
        id: '3',
        task: 'To make web',
        description: 'to make last sections'
      }
    ]
  };

  render() {
    const contextValue = {
      todos: this.state,
      handleDeleteTodo: id => {
        this.setState(state => ({
          todos: state.todos.filter(todo => todo.id !== id)
        }));
      },
      handleAddTodo: todo => {
        this.setState(state => {
          state.todos.push(todo);
          return {
            todos: state.todos
          };
        });
      }
    };

    return (
      <Provider value={contextValue}>
        <Router>
          <AppWrapper>
            <Header />
            <Switch>
              <Route
                exact
                path='/'
                render={props => <Todos {...props} todos={this.state.todos} />}
              />
            </Switch>
            <Switch>
              <Route exact path='/add' component={AddTodoForm} />
            </Switch>
          </AppWrapper>
        </Router>
      </Provider>
    );
  }
}

export default App;
