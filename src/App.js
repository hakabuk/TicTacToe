import React from 'react';
import './App.css';
import Board from './containers/Board';
import Status from './components/Status';
import GameInfo from './components/GameInfo';
import calculateWinner from './components/calculateWinner';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          locations: Array(0).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      isAscending: true
      };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const locations = current.locations.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    locations.push(i);
    this.setState({
      history: history.concat([
        {
          squares: squares,
          locations: locations
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
    const elems = document.getElementsByClassName('Square');
      for(let i = 0; i < elems.length; i++) {
        elems[i].classList.remove('WinnerSquare');
        elems[i].disabled = false;
      } 
  }

  toggleMoveOrderHandler = () => {
    const current = this.state.isAscending;
    this.setState({
      isAscending: !current
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const locations = current.locations.slice();
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + 
          ((move % 2) === 0 ? ': O' : ': X') + ' to square ' + 
            (move<locations.length+1 ? locations[move-1]: '?'):
        'Go to game start';
      return (
        <li className='Move' key={move} >
          <button 
            id={this.state.stepNumber === move ? 'LatestMove' : null}
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });

    return (
      <div className="App">
        <div className="Game">
        <h1>Tic Tac Toe</h1>
          <Status isWinner={winner} 
                  stepNumber ={this.state.stepNumber} 
                  xIsNext={this.state.xIsNext}
          />
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <GameInfo 
            moves={moves}
            isAscending={this.state.isAscending} 
            clicked={()=>this.toggleMoveOrderHandler()}
          />
        </div>
      </div>
    );
  }
}

export default App;
