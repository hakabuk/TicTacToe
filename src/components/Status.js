import React from 'react';
import './Status.css';

const Status = (props) => {
	let status;
    if (props.isWinner) {
      status = "Winner: " + (!props.xIsNext ? "X" : "O");
      for (let i=0; i<3; i++) {
        let element = document.getElementById('square' + props.isWinner[i]);
        element.classList.add("WinnerSquare");        
      }
    } else if (props.stepNumber === 9) {
      status = "Cat's Game"
      document.getElementsByClassName("Square").disabled = true;
    } else if (props.stepNumber === 0) {
      status = "Click anywhere to start";
    } else {
      status = "Next player: " + (props.xIsNext ? "X" : "O");
    }
    return <div className='Status'>{status}</div>;
}

export default Status;
