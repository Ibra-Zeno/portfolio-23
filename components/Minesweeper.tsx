import { Button, Link, Tooltip } from "@nextui-org/react";
import { Bomb, Flag } from "lucide-react";
import React, { useState, useEffect } from "react";
import MineModal from "./MineModal";
import { runFireworks } from "@/lib/fireworks";
// If cell is revealed, no flag, no mine, show number of adjacent mines
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
  const [firstMove, setFirstMove] = useState(false);
  const [flaggingMode, setFlaggingMode] = useState(false);

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
    if (flaggingMode) {
      const newBoard = [...board];
      if (newBoard[row][col].isRevealed) {
        return;
      }
      newBoard[row][col].isFlagged = !newBoard[row][col].isFlagged;
      setBoard(newBoard);
      return;
    }
    if (
      gameOver ||
      win ||
      board[row][col].isRevealed ||
      board[row][col].isFlagged
    ) {
      return;
    }

    if (!firstMove) {
      setFirstMove(true);
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
      runFireworks();
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
        <div className="flex justify-between pl-3 pr-5">
          <div className="mb-2 flex items-center">
            <p className=" from-pop1 to-pop2 bg-gradient-to-r bg-clip-text text-base font-semibold leading-7 text-transparent">
              {/* from-[#C33764] to-[#1D2671] */}
              Play Minesweeper
            </p>
            <MineModal />
          </div>
          {!firstMove && (
            <span className="from-pop1 to-pop2 animate-bounce bg-gradient-to-r bg-clip-text font-sans text-xs font-semibold leading-7 text-transparent">
              Click to reveal
            </span>
          )}
        </div>
        <section className="bg-mine2 mx-auto flex w-fit flex-col justify-center rounded-xl p-2 shadow-xl xs:p-4">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="flex w-fit rounded-xl">
              {row.map((cell, colIndex) => (
                <div
                  key={colIndex}
                  className={`cell border-mine1 relative flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-sm border p-1 font-sans text-base font-bold text-foreground shadow-sm xs:h-8 xs:w-8 sm:h-[45px] sm:w-[45px] md:text-base lg:rounded lg:font-bold ${
                    cell.isRevealed ? "bg-background dark:bg-[#050607]/75" : ""
                  } ${cell.isFlagged ? "bg-[#ffbfbb] dark:bg-[#ebfcff]" : ""} ${
                    cell.isRevealed && cell.isMine
                      ? "bg-gradient-to-r from-[#FF416C]/80 to-[#FF4B2B]/80"
                      : ""
                  }`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  onContextMenu={(e) =>
                    handleCellRightClick(e, rowIndex, colIndex)
                  }
                >
                  {!cell.isRevealed && !cell.isFlagged && flaggingMode && (
                    <div className="relative flex h-full w-full items-center justify-center justify-items-center align-middle">
                      <div className="absolute inset-0 z-20 mx-auto my-auto h-1 w-1 rounded-full bg-gray-200"></div>
                    </div>
                  )}
                  {cell.isRevealed &&
                  !cell.isMine &&
                  countAdjacentMines(rowIndex, colIndex) > 0
                    ? countAdjacentMines(rowIndex, colIndex)
                    : null}
                  {cell.isRevealed && cell.isMine ? (
                    <Bomb className="fill-slate-700 text-slate-900" />
                  ) : cell.isFlagged ? (
                    <Flag
                      size={16}
                      className="fill-[#FF416C] text-slate-900"
                      strokeWidth={2}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          ))}
          {!gameOver && !win && (
            <Tooltip
              content="Right Click Cell to Flag"
              className="custom-font text-xs"
              placement="bottom"
              closeDelay={-100}
            >
              <Button
                className={`mx-auto mt-2 w-fit text-xs font-bold tracking-wider md:text-sm ${
                  flaggingMode ? "bg-mine3 " : "bg-mine4"
                }`}
                isIconOnly
                variant="shadow"
                onClick={() => setFlaggingMode(!flaggingMode)}
              >
                <Flag size={22} className="fill-[#FF416C] text-gray-700" />
              </Button>
            </Tooltip>
          )}
        </section>
        <div className="flex flex-col">
          {gameOver && (
            <>
              {/* {setGamePlaying(false)} */}
              <div className="my-4 text-center text-lg font-bold text-red-500 lg:text-2xl">
                Try again!
              </div>
              <Button
                size="sm"
                className="mx-auto w-fit p-4 !py-5 text-xs font-bold tracking-wider text-background md:text-sm"
                color="primary"
                onClick={resetGame}
              >
                Reset Game
              </Button>
            </>
          )}
          {win && (
            <>
              {/* {setGamePlaying(false)} */}
              <div className="mb-2 mt-4 text-center text-lg font-bold text-green-500 lg:text-2xl">
                You Win! 🏆
              </div>
              <p className="mx-auto mb-4 w-fit rounded-lg border border-sec bg-[#654E30]/75 px-2 py-1 text-center text-sm leading-7 text-gray-100 shadow-lg dark:border-main dark:bg-main/30">
                My first{" "}
                <Link
                  href="https://ibra-zeno.github.io/Khabib/"
                  target="_blank"
                  className="from-pop1 to-pop2 bg-gradient-to-r bg-clip-text text-sm text-transparent underline"
                >
                  website
                </Link>
                👾
              </p>
              <Button
                className="mx-auto w-fit p-4 !py-5 text-xs font-bold tracking-wider text-background md:text-sm"
                color="primary"
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
