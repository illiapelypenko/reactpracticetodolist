import styled from 'styled-components';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Todos from './components/Todos';
import EditTodo from './components/EditTodo';
import AddTodoForm from './components/AddTodoForm';
import NotFound from './components/NotFound';

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
    todos: []
  };

  componentDidMount() {
    fetch('http://localhost:5000/todos')
      .then(res => res.json())
      .then(todos => {
        this.setState(state => ({
          todos
        }));
      });
  }

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
              <Route exact path='/add' component={AddTodoForm} />
              <Route exact path='/edit/:id' component={EditTodo} />
              <Route component={NotFound} />
            </Switch>
          </AppWrapper>
        </Router>
      </Provider>
    );
  }
}

export default App;
