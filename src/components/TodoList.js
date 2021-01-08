import React from 'react';

class TodoList extends React.Component {

    render() {
        const { el } = this.props;
        return (
            <div>
                {el}
            </div>
        );
    }
} 

export default TodoList;