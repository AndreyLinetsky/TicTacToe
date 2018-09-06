import React from 'react';
import styled from 'styled-components';
import { cellValueColor, cellBorderColor } from '../styles/colors';

const StyledCell = styled.div`
  width: 40px;
  height: 40px;
  margin: 1px;
  color: ${cellValueColor};
  border: 1px solid ${cellBorderColor};
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;       
  -moz-user-select: none; 
  -ms-user-select: none;  
`;

export function BoardCell({ cellValue, onClick }) {
  return <StyledCell {...{ onClick }}>{cellValue}</StyledCell>;
}
