import React, { Component } from 'react';
import './App.css';
import withTimer from "./HOC/HOC";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            react v16 高阶组件新特性测试
        </header>
          <div>
              {this.props.time.toLocaleString()}
          </div>
      </div>
    );
  }
}

export default withTimer(App);
