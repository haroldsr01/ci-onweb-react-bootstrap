import './App.css';
import React from 'react'
import { NavBarCI } from './components/NavBarCI';
import { Header } from './components/Header';

function App() {
  return (
    <React.Fragment>
      <NavBarCI />
      <Header />
    </React.Fragment>
  );
}

export default App;