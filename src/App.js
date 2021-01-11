import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import FilterButtons from './components/FilterButtons';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], itemToShow: "all"};
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

  updateItemToShow = s => {
    this.setState({
        itemToShow: s
    });
  };

  render() {
  
    return (
      <div>
        <h3>TODO</h3>
        <TodoForm createItem={this.create}/>
        <TodoList items={this.state.items} itemToShow={this.state.itemToShow} removeTodo={this.remove} setCompleted={this.setComplete}/>
        <FilterButtons updateItemToShow={this.updateItemToShow}/>
      </div>
    );
  }
}

export default TodoApp;