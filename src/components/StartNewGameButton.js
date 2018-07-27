import React from 'react';
import styled from 'styled-components';
import { startNewGameButtonBackgroundColor } from '../styles/colors';

const StyledButton = styled.button`
  background-color: ${startNewGameButtonBackgroundColor};
  height: 40px;
  width: 130px;
  border-radius: 3px;
  margin-top: 3px;
`;

export function StartNewGameButton({ resetGame }) {
  return (
    <StyledButton {...{ onClick: resetGame }}> Start new game </StyledButton>
  );
}
