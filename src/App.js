import React from 'react';
//import ReactDOM from 'react-dom';
//import Redux from 'redux';
//import { createStore } from 'redux';

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

//const { createStore } = Redux;
//const store = createStore(counter);

class App extends React.Component {
  constructor(){
    super();
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }
  update(){
    this.setState({val: this.state.val + 1})
  }

  componentWillMount() {
    console.log('componentWillMount')
    //this.setState({m: 2})
  }
   
  render(){
      console.log('render');
      return <button onClick={this.update}>{this.state.val}</button>
  }


  componentDidMount() {
    console.log('componentDidMount') 
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

    
}

export default App