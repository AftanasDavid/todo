import React from 'react';
import {v1 as uuid} from "uuid";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], itemToShow: "all"};
    }

    handleChange = e => {
        this.setState({ text: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.createItem({...this.state, id: uuid(), completed: false});
        this.setState({text: ""});
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">
                    What needs to be done?
                </label>
                <input
                    id="new-todo"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <button>
                    Add
                </button>
            </form>
        );
    }
}

export default TodoForm;