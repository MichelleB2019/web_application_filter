import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let defaultTextColor = '#fff'; //white color
let defaultStyle = {
  color: defaultTextColor
};


class TitleofSite extends Component {
  render() {
    return (
        <h2>Start</h2>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class Table_result extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
        <img />
        <h3>Table Name</h3>
        <ul><li>Table1</li><li>Table2</li><li>Table3</li></ul>
      </div>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <p>
         <code>Welcome to this Search Website</code> 
        </p>
        <TitleofSite/>
        <Filter/>
        <Table_result/>
        <Table_result/>
        <Table_result/>
      </div>
    );
  }
}

export default App;