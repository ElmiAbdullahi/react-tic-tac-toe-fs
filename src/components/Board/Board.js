import React from 'react';
import { useContext } from 'react';
import { GameContext } from '../../services/GameContext.js';
import Box from '../Box/Box.js';

export default function Board() {
  const { gameBoard } = useContext(GameContext);
  return (
    <div>
      {gameBoard.map(({ space, content }) => {
        <Box key={space} space={space} content={content} />;
      })}
    </div>
  );
}
