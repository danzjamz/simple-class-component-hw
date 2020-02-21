import React, { Component } from 'react';
import Nav from './navigation'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
        <Nav />
        <h1>HELLO WORLD</h1>
      </div>
    );
  }
}
