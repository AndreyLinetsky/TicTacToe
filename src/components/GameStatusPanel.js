import React from 'react';
import styled from 'styled-components';
import { gameStatusMessageColor } from '../styles/colors';
import { getGameStatusMessage } from '../utils/game';

const GameStatusMessage = styled.div`
  color: ${gameStatusMessageColor};
`;

export function GameStatusPanel({ ...gameStatusProps }) {
  const statusMessage = getGameStatusMessage({ ...gameStatusProps });
  return <GameStatusMessage>{statusMessage}</GameStatusMessage>;
}
