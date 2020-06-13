import styled from 'styled-components';

export const MessageTypography = styled.div`
  min-height: 15%;
  background-color: #404040;
  border-radius: 16px;
  padding: 2%;
  display: block;
  float: ${props => props.align};
  margin-left: ${props => (props.align === 'left' ? '2%' : undefined)};
  margin-right: ${props => (props.align === 'right' ? '2%' : undefined)};
`;
