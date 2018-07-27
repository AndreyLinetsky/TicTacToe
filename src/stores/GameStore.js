import { types } from 'mobx-state-tree';
import { CELL_VALUE } from '../constants/game';
import { calculateGameWinner } from '../utils/game';

const { X, O, NONE } = CELL_VALUE;

const initialGameStoreSnapshot = {
  isXTurn: true,
  cells: Array(9).fill(NONE)
};

const GameStore = types
  .model('GameStore', {
    isXTurn: types.boolean,
    cells: types.array(types.enumeration([X, O, NONE]))
  })
  .views(self => ({
    get gameWinner() {
      return calculateGameWinner(self.cells);
    },
    get isGameOver() {
      const { cells, gameWinner } = self;
      const isNoEmptyCellsLeft = cells.every(cell => cell !== NONE);
      return isNoEmptyCellsLeft || gameWinner !== NONE;
    }
  }))
  .actions(self => ({
    playTurn(cellIndex) {
      const { isXTurn, cells } = self;
      const newCellValue = isXTurn ? X : O;
      cells[cellIndex] = newCellValue;

      return Object.assign(self, {
        isXTurn: !isXTurn,
        cells
      });
    },
    resetGame() {
      return Object.assign(self, { ...initialGameStoreSnapshot });
    }
  }));

export function createGameStore() {
  return GameStore.create(initialGameStoreSnapshot, {});
}
