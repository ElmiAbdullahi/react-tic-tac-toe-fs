import { createContext } from 'react';
import { useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameBoard, setGameBoard] = useState([
    { space: 0, content: '' },
    { space: 1, content: '' },
    { space: 2, content: '' },
    { space: 3, content: '' },
    { space: 4, content: '' },
    { space: 5, content: '' },
    { space: 6, content: '' },
    { space: 7, content: '' },
    { space: 8, content: '' },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState('X or O');
  const [active, setActive] = useState('true/false');
  const [gameMessage, setGameMessage] = useState('X or O wins or Tie');

  const gameState = {
    gameBoard,
    setGameBoard,
    active,
    setActive,
    currentPlayer,
    setCurrentPlayer,
    gameMessage,
    setGameMessage,
  };

  return (
    <GameContext.Provider
      value={{
        ...gameState,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
