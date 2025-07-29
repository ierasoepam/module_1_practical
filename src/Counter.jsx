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
        return createElement(
            'div',
            null,
            createElement('p', null, this.state.counter),
            createElement('button', {onClick: this.handleIncrementCounter}, 'Increment'),
            createElement('button', {onClick: this.handleDecrementCounter}, 'Decrement')
        )
    }
    
}