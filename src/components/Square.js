import React from 'react';
import './Square.css';

const Square = (props) => {
  return (
    <button className="Square" id={'square'+props.id} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;