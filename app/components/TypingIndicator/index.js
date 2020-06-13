import React from 'react';
import styled from 'styled-components';

const TypingWrapper = styled.div`
  min-width: 10%;
  min-height: 15%;
  background-color: #404040;
  border-radius: 16px;
  padding: 1% 2% 3% 2%;
  width: 10%;
  display: block;
  float: right;
  margin-right: 2%;
`;

export default function TypingIndicator() {
  return (
    <TypingWrapper>
      <div className="is-typing">
        <div className="jump1" />
        <div className="jump2" />
        <div className="jump3" />
      </div>
    </TypingWrapper>
  );
}
