import React, { Component, createElement } from 'react';

export class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: props.initialValue || 0
        }
    }
    

    handleIncrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    handleDecrementCounter = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        { 'data-cy': 'counter-value' },
        this.state.counter
      ),
      React.createElement(
        'button',
        { onClick: this.handleIncrementCounter, 'data-cy': 'increment-button', className: 'btn-primary'},
        'Increment'
      ),
      React.createElement(
        'button',
        { onClick: this.handleDecrementCounter, 'data-cy': 'decrement-button', className: 'btn-secondary'},
        'Decrement'
      )
    );
  }
    
}