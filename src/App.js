import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: []};
  }

  create = newItem => {
      this.setState((state) => ({
          items: [...state.items, newItem]
      }));
  }

  remove = id => {
      this.setState((state) => ({
          items: state.items.filter(i => i.id !== id)
      }));
  }

  setComplete = id => {
    const updatedItems = this.state.items.map(item => {
        if (item.id === id) {
            return { ...item, completed: !item.completed};
        }
        return item;
        });
    this.setState({ items: updatedItems });
  }

  render() {
  
    return (
      <div>
        <h3>TODO</h3>
        <TodoForm createItem={this.create}/>
        <TodoList removeTodo={this.remove} setCompleted={this.setComplete}/>
      </div>
    );
  }
}

export default TodoApp;