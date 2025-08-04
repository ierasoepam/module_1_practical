import { Component, createElement } from 'react';

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
        'h2',
        { 'data-cy': 'counter-value' },
        this.state.value
      ),
      React.createElement(
        'button',
        { onClick: this.increment, 'data-cy': 'increment-button' },
        'Increment'
      ),
      React.createElement(
        'button',
        { onClick: this.decrement, 'data-cy': 'decrement-button' },
        'Decrement'
      )
    );
  }
    
}