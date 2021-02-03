import React from 'react';

function Card(props) {
  return (
    <div className="Card">
      <h3>{props.category}</h3>
      <h2>{props.title}</h2>
      <button>Select</button>
    </div>
  );
}

export default Card;
