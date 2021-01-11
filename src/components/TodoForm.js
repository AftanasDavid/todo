import React from 'react';
import {v1 as uuid} from "uuid";

class TodoForm extends React.Component {

    handleChange = e => {
        this.setState({ text: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.createItem({...this.state, id: uuid(), completed: false});
        this.setState({text: ""});
      }

    render() {
        const { text } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">
                    What needs to be done?
                </label>
                <input
                    id="new-todo"
                    onChange={this.handleChange}
                    value={text}
                />
                <button>
                    Add
                </button>
            </form>
        );
    }
}

export default TodoForm;