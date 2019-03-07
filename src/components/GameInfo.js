import React from 'react';
import styled from 'styled-components';
import './GameInfo.css';

const MedTitle = styled.h3`
      color: #423E37;
      font-size: 2rem;
`;

const GameInfo = (props) => {
      return (
            <div className="GameInfo">
                  <MedTitle>Game History:</MedTitle>
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