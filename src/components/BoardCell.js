import React from 'react';
import styled from 'styled-components';
import { cellValueColor, cellBorderColor } from '../styles/colors';

const StyledCell = styled.div`
  ${({ isDisabled }) => (isDisabled ? 'pointer-events: none;' : '')};
  width: 40px;
  height: 40px;
  margin: 1px;
  color: ${cellValueColor};
  border: 1px solid ${cellBorderColor};
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function BoardCell({ cellValue, isDisabled, onClick }) {
  return <StyledCell {...{ isDisabled, onClick }}>{cellValue}</StyledCell>;
}
