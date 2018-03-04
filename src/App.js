import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoBox from './components/TodoBox';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import Firebase from './Firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: []
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount(){
    const items = Firebase.database().ref().child('todo');

    items.on('value', snapshot => {
     this.setState({
        todoItems:snapshot.val()
      })
    });
  }

  onSubmit() {
    let todoText = this.refs.todobox.getTodoBox();
    let newValue = this.state.todoItems.concat(todoText);
    this.setState({todoItems:newValue});
    Firebase.database().ref().child('todo').update(newValue);
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <h1 className="mt-4">My Todo App</h1>
          <TodoBox enviar={this.onSubmit} ref="todobox"/>
          <TodoList lista={this.state.todoItems}/>
        </div>
      </div>
    );
  }
}

export default App;
