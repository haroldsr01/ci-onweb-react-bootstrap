import './App.css';
import React from 'react'
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { PreviewCards } from './components/PreviewCards';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <PreviewCards />
    </React.Fragment>
  );
}

export default App;