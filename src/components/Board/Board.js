import React from 'react';
import { useContext } from 'react';
import { GameContext } from '../../services/GameContext.js';
import Box from '../Box/Box.js';

export default function Board() {
  const { gameBoard } = useContext(GameContext);
  console.log(gameBoard);
  return (
    <div className="game-board">
      {gameBoard.map(({ space, content }) => {
        <Box key={space} space={space} content={content} />;
      })}
    </div>
  );
}
