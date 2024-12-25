import React from 'react';
import Icon from "../Icon/Icon";
import './Card.css';

function Card({ player }) {
  let icon;
  if (player === 'X') {
    icon = <Icon name="cross" />;
  } else if (player === 'O') {
    icon = <Icon name="circle" />;
  } else {
    icon = <Icon name="pen" />;
  }

  return <div className="card">{icon}</div>;
}

export default Card;
