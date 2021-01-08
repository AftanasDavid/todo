import React from 'react';

class FilterButtons extends React.Component {
    render() {
        const { updateItemToShow } = this.props;
        return (
            <div>
                <button onClick={() => updateItemToShow("all")}>All</button>
                <button onClick={() => updateItemToShow("completed")}>Completed</button>
                <button onClick={() => updateItemToShow("active")}>Active</button>
            </div>
        );
    }
}

export default FilterButtons;