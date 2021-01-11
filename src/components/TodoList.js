import React from 'react';
import Todo from './Todo';


class TodoList extends React.Component {

    render() {
        const { setCompleted } = this.props;
        const { removeTodo } = this.props;
        const { itemToShow } = this.props;
        let { items } = this.props;

        if (itemToShow === "all") {
            items = this.props.items;
        } else if (itemToShow === "completed") {
            items = this.props.items.filter(item => item.completed);
        } else if (itemToShow === "active") {
            items = this.props.items.filter(item => !item.completed);
        } 

        const el = items.map(item => {
            return <Todo key={item.id} id={item.id} completed={item.completed} text={item.text} removeTodo={removeTodo} setCompleted={setCompleted}/>
        });
        return (
            <div>
                {el}
            </div>
        );
    }
} 

export default TodoList;