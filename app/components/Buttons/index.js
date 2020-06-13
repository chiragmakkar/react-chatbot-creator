import React from 'react';
import styled from 'styled-components';

export const SaveButton = styled.button`
  background-color: ${props => (!props.disabled ? '#66d68d' : 'lightGrey')};
  border-radius: 4px;
  font-size: 12px;
  color: ${props => (!props.disabled ? 'darkslategrey' : 'black')};
`;
