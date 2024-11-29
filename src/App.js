import React from 'react';
import './App.css';
import FormValidation from './components/FormValidation'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <FormValidation />
      </Router>
    </>
  );
}

export default App;

