import React from 'react';
import styled from 'styled-components';
import { BoardCell } from './BoardCell';
import { CELL_VALUE } from '../constants/game';

const GameBoardContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

const RowContainer = styled.div`
  display: flex;
`;

const topRowIndexes = [0, 1, 2];
const middleRowIndexes = [3, 4, 5];
const bottomRowIndexes = [6, 7, 8];

function getBoardCell({ index, cells, playTurn }) {
  const isCellEmpty = cells[index] === CELL_VALUE.NONE;
  const cellValue = isCellEmpty ? '' : cells[index];
  return (
    <BoardCell
      {...{
        key: index,
        cellValue,
        onClick: () => playTurn(index)
      }}
    />
  );
}

function GameBoardRow({ indexes, ...gameBoardProps }) {
  return (
    <RowContainer>
      {indexes.map(index => getBoardCell({ index, ...gameBoardProps }))}
    </RowContainer>
  );
}

export function GameBoard({ ...gameBoardProps }) {
  return (
    <GameBoardContainer>
      <GameBoardRow {...{ indexes: topRowIndexes, ...gameBoardProps }} />
      <GameBoardRow {...{ indexes: middleRowIndexes, ...gameBoardProps }} />
      <GameBoardRow {...{ indexes: bottomRowIndexes, ...gameBoardProps }} />
    </GameBoardContainer>
  );
}
