import React from 'react';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Card from './Components/Card';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
    this.state = {
      "food":"Please select a food",
      "movie":"Please select a movie",
      "activity":"Please select an activity",
      "videogame":"Please select a video game"
    };
  }


makeChoice = (category, choice) => {
    this.setState(state => {
        state[category] = choice
        return state
    })
}

  render() {
      return (
    <div className="App">
      <Navbar/>
      <Dashboard food = {this.state.food} movie = {this.state.movie} activity = {this.state.activity} videogame = {this.state.videogame}/>
      <div className="card-container">
      <Card category = 'Food' title = 'Pizza' makeChoice = {this.makeChoice}/>
      <Card category = 'Food' title = 'Chicken Curry' makeChoice = {this.makeChoice}/>
      <Card category = 'Food' title = 'Ice Cream' makeChoice = {this.makeChoice}/>
      <Card category = 'Food' title = 'Chicken Wings' makeChoice = {this.makeChoice}/>
      <Card category = 'Movie' title = 'Interstellar'/>
      <Card category = 'Movie' title = 'Titanic'/>
      <Card category = 'Movie' title = 'Godzilla'/>
      </div>
    </div>
  );
  }
  
}

export default App;
