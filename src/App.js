import styled from 'styled-components';
import axios from 'axios';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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

  updateState = () => {
    axios.get('http://localhost:5000/todos').then(todos => {
      this.setState(state => ({
        todos: todos.data
      }));
    });
  };

  componentDidMount() {
    this.updateState();
  }

  render() {
    const contextValue = {
      todos: this.state,
      handleDeleteTodo: async id => {
        await axios.delete(`http://localhost:5000/todos/${id}`);
        this.updateState();
      },

      handleAddTodo: async todo => {
        await axios.post(`http://localhost:5000/todos/add`, todo);
        this.updateState();
      },

      handleEditTodo: async todo => {
        await axios.put(`http://localhost:5000/todos/edit`, todo);
        this.updateState();
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
