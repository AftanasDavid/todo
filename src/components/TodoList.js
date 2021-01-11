import React from 'react';
import Todo from './Todo';
import FilterButtons from './FilterButtons';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], itemToShow: "all"};
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
                {el}
                <FilterButtons updateItemToShow={this.updateItemToShow}/>
            </div>
        );
    }
} 

export default TodoList;