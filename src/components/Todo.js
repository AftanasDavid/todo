import React from 'react';

class Todo extends React.Component {
    handleRemove = id => {
        this.props.removeTodo(this.props.id);
    }
    
    handleComplete = e => {
        this.props.setCompleted(this.props.id);
    }
        
    render() {
        return (
            <ul>
                <button onClick={this.handleRemove}>X</button>
                <li className={this.props.completed ? "completed" : ""} onClick={this.handleComplete}>{this.props.text} </li>
            </ul>
        );
    }
}

export default Todo;