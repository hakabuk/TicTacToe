import React from 'react';
import Square from '../components/Square';
import './Board.css';

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square key={i} id={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    let arr = [];
    for (let i=0; i<this.props.squares.length; i++) {
      arr.push(this.renderSquare(i));
    }
    return (
      <div className='GameGrid'>{arr}</div>
    );
  }
}

export default Board;