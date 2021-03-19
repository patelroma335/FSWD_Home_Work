import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
    };
    render() { 
    return ( 
    <div>
    <span>{this.FormatCount()}</span>
    <button>Increment</button>
    </div>
    );
  }
  formatCount() {
      const { count } =
      return this.state.count === 0 ? 'Zero' : count;
  }
}
 
export default Counter;