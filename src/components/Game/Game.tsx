import { useEffect, useState } from "react";
import Board from "../Board";
import { RestartButton } from "./RestartButton";
import { StatusBar } from "./StatusBar";

const calculateWin = (squares: Array<any>) => {
  return squares.filter((square) => square.done).length === 16;
};

const generateRandomBoard = () => {
  let pairs = [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
    [7, 7],
    [8, 8],
  ];
  let board = Array(16).fill(null);

  let cards = pairs.flat();

  // shuffle cards
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  for (let i = 0; i < board.length; i++) {
    board[i] = { value: cards[i], open: false, done: false };
  }

  return board;
};

export const Game = () => {
  const [board, setBoard] = useState(generateRandomBoard());
  const win = calculateWin(board);

  useEffect(() => {
    const openCards = board.filter((card) => card.open);
    if (openCards.length === 2) {      
      if (openCards[0].value === openCards[1].value) {
        const boardCopy = [...board];
        boardCopy[board.indexOf(openCards[0])] = {value: openCards[0].value, done: true, open: false};
        boardCopy[board.indexOf(openCards[1])] = {value: openCards[1].value, done: true, open: false};
        setBoard(boardCopy);
      } else {
        setTimeout(() => {
          const boardCopy = [...board];
          boardCopy[board.indexOf(openCards[0])].open = false;
          boardCopy[board.indexOf(openCards[1])].open = false;
          setBoard(boardCopy);
        }, 1000);
      }
    }
  }, [board]);

  const restart = () => {
    setBoard(generateRandomBoard());
  };

  const handleClick = (i: number) => {
    const boardCopy = [...board];
    const openCards = boardCopy.filter((card) => card.open).length;
    if (openCards <= 1) {
      boardCopy[i].open = true;
    }
    setBoard(boardCopy);
  };

  return (
    <div className="flex flex-col p-4 mx-auto justify-center">
      <StatusBar win={win} />
      <Board squares={board} onClick={handleClick} />
      <RestartButton absolute={false} onClick={restart} />
    </div>
  );
};
