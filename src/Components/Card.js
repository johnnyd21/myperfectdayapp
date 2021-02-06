import React from 'react';

function Card(props) {
  return (
    <div className="Card">
      <h3>{props.category}</h3>
      <h2>{props.title}</h2>
      <button onClick={() => {props.makeChoice(props.category, props.title)}}>Select</button>
      
    </div>
  );
}

export default Card;
