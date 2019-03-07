import React from 'react';
import styled from 'styled-components';

import './Status.css';

const MedTitle = styled.h3`
      color: #423E37;
      font-size: 2rem;
`;

const Status = (props) => {
  let status;
  if (props.isWinner) {
    status = "Winner: " + (!props.xIsNext ? "X" : "O");
    for (let i = 0; i < 3; i++) {
      let element = document.getElementById('square' + props.isWinner[i]);
      element.classList.add("WinnerSquare");
    }
  } else if (props.stepNumber === 9) {
    status = "Cat's Game";
    const elems = document.getElementsByClassName("Square");
    for (let i = 0; i < elems.length; i++) {
      elems[i].disabled = true;
    }
  } else if (props.stepNumber === 0) {
    const elems = document.getElementsByClassName("Square");
    for (let i = 0; i < elems.length; i++) {
      elems[i].disabled = false;
      elems[i].classList.remove("WinnerSquare");
    }
    status = "Click anywhere to start";
  } else {
    status = "Next player: " + (props.xIsNext ? "X" : "O");
  }
  return <div>
    <MedTitle className='Status'>{status}</MedTitle>
  </div>;
}

export default Status;
