import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Test } from './Test';
import React from 'react'

function App() {
  return (
  <React.Fragment>
    <div className="container">
      <div className="row">
        <div className="col" style={{border: "2px solid red"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid red"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid red"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid red"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid red"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid red"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid red"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid red"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid red"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid red"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid red"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid red"}}>
          Column
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm" style={{border: "2px solid red"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid red"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid red"}}>
          Column
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-auto" style={{border: "2px solid red"}}>
          Column<br/>Column<br/>Column
        </div>
        <div className="col-lg-auto" style={{border: "2px solid red"}}>
          Column
        </div>
      </div>
    </div>
  </React.Fragment>
  );
}

export default App;

      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <Button>This is a button</Button>
      //   <Test />
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>