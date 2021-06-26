import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            counter: 0
        }
    }

    incrementCounter(){
        // this.setState({
        //     counter: this.state.counter + 1
        // },
        // () => {
        //     console.log('Sync Count', this.state.counter);
        // }
        // )

      this.setState((previousState) => ({
          counter: previousState.counter + 1
      }))

        console.log('Async Count', this.state.counter);
    }
    
    incrementByFive(){
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
    }

    render() {
        return (
            <div>
                <h3>{this.state.counter}</h3>
                <button onClick={() => { this.incrementByFive() }}>Increment</button>
            </div>
        )
    }
}

export default Counter
