import { Button } from "@nextui-org/react";
import { Bomb, Flag } from "lucide-react";
import React, { useState, useEffect } from "react";
// import "./Minesweeper.css"; // You'll need to create the CSS for styling

interface Cell {
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
}

const numRows = 10;
const numCols = 10;
const numMines = 13;

const Minesweeper: React.FC = () => {
  const [board, setBoard] = useState<Cell[][]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  const resetGame = () => {
    setBoard([]);
    setGameOver(false);
    setWin(false);
    const initialBoard: Cell[][] = Array.from({ length: numRows }, () =>
      Array.from({ length: numCols }, () => ({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
      })),
    );
    setBoard(initialBoard);
    for (let i = 0; i < numMines; i++) {
      let row, col;
      do {
        row = Math.floor(Math.random() * numRows);
        col = Math.floor(Math.random() * numCols);
      } while (initialBoard[row][col].isMine);
      initialBoard[row][col].isMine = true;
    }
  };

  useEffect(() => {
    resetGame(); // Call resetGame instead of duplicating the initialization logic
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
    const isFlagged = board[row][col].isFlagged;
    if (isFlagged) {
      // Do nothing if the cell is flagged
      return;
    }
    if (board[row][col].isMine) {
      setGameOver(true);
      const newBoard = board.map((rowArr, rIndex) =>
        rowArr.map((cell, cIndex) => {
          if (cell.isMine) {
            return { ...cell, isRevealed: true }; // Reveal the bomb
          }
          return cell;
        }),
      );
      setBoard(newBoard);
      return;
    }

    const newBoard = [...board];
    const revealCell = (r: number, c: number) => {
      if (
        r < 0 ||
        r >= numRows ||
        c < 0 ||
        c >= numCols ||
        newBoard[r][c].isRevealed ||
        newBoard[r][c].isFlagged
      )
        return;
      newBoard[r][c].isRevealed = true;
      if (countAdjacentMines(r, c) === 0) {
        // reveal neighboring cells
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
    <>
      <section className="mx-auto flex w-fit flex-col justify-center rounded-xl ">
        <h2 className="mb-2 bg-gradient-to-r from-[#C33764] to-[#1D2671] bg-clip-text text-base font-semibold leading-7 text-transparent">
          Minesweeper
        </h2>
        <section className="mx-auto flex w-fit flex-col justify-center rounded-xl bg-gray-200 p-4">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="flex w-fit rounded-xl">
              {row.map((cell, colIndex) => (
                <div
                  key={colIndex}
                  className={`cell flex h-12 w-12 items-center justify-center rounded border border-gray-300 p-1 font-sans font-bold shadow-sm ${
                    cell.isRevealed ? "bg-white" : ""
                  } ${cell.isFlagged ? "bg-[#ffe3e7]" : ""} ${
                    cell.isRevealed && cell.isMine
                      ? "bg-gradient-to-r from-[#FF416C]/80 to-[#FF4B2B]/80"
                      : ""
                  }`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  onContextMenu={(e) =>
                    handleCellRightClick(e, rowIndex, colIndex)
                  }
                >
                  {cell.isRevealed &&
                  !cell.isMine &&
                  countAdjacentMines(rowIndex, colIndex) > 0
                    ? countAdjacentMines(rowIndex, colIndex)
                    : null}
                  {cell.isRevealed && cell.isMine ? (
                    <Bomb className="fill-slate-700" />
                  ) : cell.isFlagged ? (
                    <Flag
                      size={18}
                      className="fill-[#FF416C] text-slate-700"
                      strokeWidth={1.2}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </section>
        <div className="flex flex-col">
          {!gameOver && !win && (
            <div className="my-4 text-center text-lg font-bold text-gray-500">
              Right click to flag a cell
            </div>
          )}
          {gameOver && (
            <>
              <div className="my-4 text-center text-2xl font-bold text-red-500">
                Try again!
              </div>
              <Button
                size="sm"
                className=" mx-auto w-fit p-4 !py-5 text-sm font-bold tracking-wider"
                variant="shadow"
                onClick={resetGame}
              >
                Reset Game
              </Button>
            </>
          )}
          {win && (
            <>
              <div className="my-4 text-center text-2xl font-bold text-green-500">
                You Win! 🏆
              </div>
              <Button
                className=" mx-auto w-fit text-sm font-bold tracking-wider"
                variant="shadow"
                onClick={resetGame}
              >
                Reset Game
              </Button>
            </>
          )}{" "}
        </div>
      </section>
    </>
  );
};

export default Minesweeper;
