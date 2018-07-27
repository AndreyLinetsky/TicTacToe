import { CELL_VALUE } from '../constants/game';

const { O, X, NONE } = CELL_VALUE;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export function calculateGameWinner(cells) {
  let gameWinner = NONE;

  for (const combination of winningCombinations) {
    if (
      cells[combination[0]] !== NONE &&
      cells[combination[0]] === cells[combination[1]] &&
      cells[combination[0]] === cells[combination[2]]
    ) {
      gameWinner = cells[combination[0]];
      break;
    }
  }
  return gameWinner;
}

export function getGameStatusMessage({ gameWinner, isXTurn, isGameOver }) {
  if (isGameOver) {
    return gameWinner !== NONE
      ? `${gameWinner} won the game`
      : 'Game ended in draw';
  }

  return `${isXTurn ? X : O} Turn`;
}
