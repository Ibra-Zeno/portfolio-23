import React, { useState, useEffect } from "react";
// import "./Minesweeper.css"; // You'll need to create the CSS for styling

interface Cell {
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
}

const numRows = 8;
const numCols = 8;
const numMines = 10;

const Minesweeper: React.FC = () => {
  const [board, setBoard] = useState<Cell[][]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  let gamesPlayed = 0;

  const resetGame = () => {
    // Reset the game by reinitializing the board and other game state
    gamesPlayed++;
    setBoard([]);
    setGameOver(false);
    setWin(false);
    // Initialize the board and mines again (you can reuse the code from the useEffect)
    // ...
  };

  useEffect(() => {
    // Initialize the board with cells
    const initialBoard: Cell[][] = Array.from({ length: numRows }, () =>
      Array.from({ length: numCols }, () => ({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
      })),
    );
    setBoard(initialBoard);

    // Place mines randomly on the board
    for (let i = 0; i < numMines; i++) {
      let row, col;
      do {
        row = Math.floor(Math.random() * numRows);
        col = Math.floor(Math.random() * numCols);
      } while (initialBoard[row][col].isMine);
      initialBoard[row][col].isMine = true;
    }
  }, []);

  const handleCellClick = (row: number, col: number) => {
    if (
      gameOver ||
      win ||
      board[row][col].isRevealed ||
      board[row][col].isFlagged
    ) {
      return;
    }

    if (board[row][col].isMine) {
      // Game over, reveal all mines
      setGameOver(true);
      return;
    }

    const newBoard = [...board];
    const revealCell = (r: number, c: number) => {
      if (
        r < 0 ||
        r >= numRows ||
        c < 0 ||
        c >= numCols ||
        newBoard[r][c].isRevealed
      )
        return;
      newBoard[r][c].isRevealed = true;
      if (countAdjacentMines(r, c) === 0) {
        // If no adjacent mines, recursively reveal neighboring cells
        revealCell(r - 1, c);
        revealCell(r + 1, c);
        revealCell(r, c - 1);
        revealCell(r, c + 1);
        revealCell(r - 1, c - 1);
        revealCell(r - 1, c + 1);
        revealCell(r + 1, c - 1);
        revealCell(r + 1, c + 1);
      }
    };

    revealCell(row, col);
    setBoard(newBoard);

    // Check for a win
    const isWin = newBoard
      .flat()
      .filter((cell) => !cell.isMine)
      .every((cell) => cell.isRevealed);
    if (isWin) {
      setWin(true);
    }
  };

  const handleCellRightClick = (
    e: React.MouseEvent,
    row: number,
    col: number,
  ) => {
    e.preventDefault();
    if (gameOver || win || board[row][col].isRevealed) return;
    const newBoard = [...board];
    newBoard[row][col].isFlagged = !newBoard[row][col].isFlagged;
    setBoard(newBoard);
  };

  const countAdjacentMines = (row: number, col: number) => {
    // Count mines in adjacent cells
    let count = 0;
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const r = row + dr;
        const c = col + dc;
        if (
          r >= 0 &&
          r < numRows &&
          c >= 0 &&
          c < numCols &&
          board[r][c].isMine
        ) {
          count++;
        }
      }
    }
    return count;
  };

  return (
    <div className="minesweeper bg-gray-200 p-4">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`cell h-8 w-8 border border-gray-300 p-2 ${
                cell.isRevealed ? "bg-white" : ""
              } ${cell.isFlagged ? "bg-blue-200" : ""} ${
                cell.isMine ? "bg-red-500" : ""
              }`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              onContextMenu={(e) => handleCellRightClick(e, rowIndex, colIndex)}
            >
              {cell.isRevealed &&
              !cell.isMine &&
              countAdjacentMines(rowIndex, colIndex) > 0
                ? countAdjacentMines(rowIndex, colIndex)
                : null}
              {cell.isRevealed && cell.isMine ? "💣" : null}
            </div>
          ))}
        </div>
      ))}
      {gameOver && (
        <>
          <div className="message font-bold text-red-500">Game Over!</div>
          <button
            className="reset-button mb-4 rounded-md bg-blue-500 px-2 py-1 text-white"
            onClick={resetGame}
          >
            Reset Game
          </button>
        </>
      )}
      {win && (
        <>
          <div className="message font-bold text-green-500">You Win!</div>
          <button
            className="reset-button mb-4 rounded-md bg-blue-500 px-2 py-1 text-white"
            onClick={resetGame}
          >
            Reset Game
          </button>
        </>
      )}
    </div>
  );
};

export default Minesweeper;
