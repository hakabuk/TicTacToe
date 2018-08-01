import React from 'react';
import './GameInfo.css';

const GameInfo = (props) => {
	return (
		<div className="GameInfo">
            <h3>Game History:</h3>
            <button 
            	className='MovesOrder' 
            	onClick={props.clicked}>{props.isAscending ? 'Ascending' : 'Descending'}
            </button>
            <ul className={props.isAscending ? 'Ascending' : 'Descending'} >
            	{props.moves}
            </ul>
         </div>
	);
}

export default GameInfo;