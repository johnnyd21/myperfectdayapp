import React from 'react';

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <h3>Mr. D's Perfect Day Dashboard</h3>
    <div className="choice-group"> 
     <div className='choice'> Food:  {props.food} </div>
     <div className='choice'> Movie:  {props.movie} </div>
     <div className='choice'> Activity:  {props.activity} </div>
     <div className='choice'> Video Game: {props.videogame} </div>
    </div>
</div>
    
  );
}

export default Dashboard;
