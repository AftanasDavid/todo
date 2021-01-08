import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
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
    let items = [];

    if (this.state.itemToShow === "all") {
        items = this.state.items;
    } else if (this.state.itemToShow === "completed") {
        items = this.state.items.filter(item => item.completed);
    } else if (this.state.itemToShow === "active") {
        items = this.state.items.filter(item => !item.completed);
    } 

    const el = items.map(item => {
        return <Todo key={item.id} id={item.id} completed={item.completed} text={item.text} removeTodo={this.remove} setCompleted={this.setComplete}/>
    });
    return (
      <div>
        <h3>TODO</h3>
        <TodoForm createItem={this.create}/>
        <TodoList el = {el}/>
        <FilterButtons updateItemToShow={this.updateItemToShow}/>
      </div>
    );
  }
}

export default TodoApp;