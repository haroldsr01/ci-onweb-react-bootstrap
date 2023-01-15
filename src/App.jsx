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
      <div className="row row-cols-sm-2 row-cols-md-4">
        <div className="col" style={{border: "2px solid blue"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid blue"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid blue"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid blue"}}>
          Column
        </div>
      </div>
      <div className="row ">
        <div className="col col-sm-6 col-md-4" style={{border: "2px solid red"}}>
          Column<br/>Column<br/>Column
        </div>
        <div className="col col-sm-6 col-md-4" style={{border: "2px solid red"}}>
          Column
        </div>
      </div>
      <div className="row row-cols-sm-2 row-cols-md-4">
        <div className="col" style={{border: "2px solid green"}}>
          Column
        </div>
        <div className="col" style={{border: "2px solid green"}}>
          <div className="row row-cols-sm-2 row-cols-md-4">
            <div className="col" style={{border: "2px solid blue"}}>
              Column
            </div>
            <div className="col" style={{border: "2px solid blue"}}>
              Column
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
  );
}

export default App;