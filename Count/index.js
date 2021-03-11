import React from 'react';

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.onAddClick = this.onAddClick.bind(this);
        this.onSubtractClick = this.onSubtractClick.bind(this);
        this.state = {
            count: 0,
        };
    }

    onAddClick(e) {
        this.setState({
            count: this.state.count + 1,
        });
    }

    onSubtractClick(e) {
        this.setState({
            count: this.state.count - 1,
        });
    }

    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <button onClick={this.onAddClick} data-attr="foo">
                    +
                </button>
                <button onClick={this.onAddClick} data-attr="bar">
                    -
                </button>
            </div>
        );
    }
}

export default Count;
