import React from 'react';
const { default: styled } = require('styled-components');

const AvatarWrapper = styled.div`
  width: 5%;
  display: inline-block;
  float: ${props => props.align};
`;

const ImageWrapper = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

export default function Avatar(props) {
  return (
    <AvatarWrapper {...props}>
      <ImageWrapper {...props} />
    </AvatarWrapper>
  );
}
