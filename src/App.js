import React from 'react';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Card from './Components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
      <div className="card-container">
      <Card category = 'Food' title = 'Pizza'/>
      <Card category = 'Food' title = 'Chicken Curry'/>
      <Card category = 'Food' title = 'Ice Cream'/>
      <Card category = 'Food' title = 'Chicken Wings'/>
      <Card category = 'Movie' title = 'Interstellar'/>
      <Card category = 'Movie' title = 'Titanic'/>
      <Card category = 'Movie' title = 'Godzilla'/>
      </div>
    </div>
  );
}

export default App;
