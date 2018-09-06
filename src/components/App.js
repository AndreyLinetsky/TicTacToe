import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { GameStatusPanel } from './GameStatusPanel';
import { GameBoard } from './GameBoard';
import { StartNewGameButton } from './StartNewGameButton';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 20px;
`;

export const App = observer(({ store }) => {
  const { gameWinner, isGameOver, cells, isXTurn, playTurn, resetGame } = store;
  const gameStatusPanelProps = {
    gameWinner,
    isXTurn,
    isGameOver
  };
  const gameBoardProps = {
    cells,
    playTurn
  };
  return (
    <StyledContainer>
      <GameStatusPanel {...gameStatusPanelProps} />
      <GameBoard {...gameBoardProps} />
      {isGameOver && <StartNewGameButton {...{ resetGame }} />}
    </StyledContainer>
  );
});
