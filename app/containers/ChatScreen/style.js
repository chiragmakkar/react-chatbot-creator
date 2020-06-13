import styled from 'styled-components';

export const ChatScreenWrapper = styled.div`
  border: solid 2px #2b2b2b;
  display: inline-block;
  width: 60%;
`;

export const MessageBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10%;
  font-family: Quicksand;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #d3d3d3;
`;

export const MessageListWrapper = styled.div`
  background-color: #1f1f1f;
  height: 70%;
  padding: 5%;
  overflow-y: scroll;
`;

export const UserMessageRowWrapper = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 2%;
`;

export const BotMessageRowWrapper = styled.div`
  display: inline-block;
  width: 100%;
`;

export const MessageInputWrapper = styled.div`
  background-color: #1f1f1f;
  height: 12.5%;
  margin-top: 5%;
  width: 100%;
  margin-top: 5%;
  background: #1f1f1f;
  border-radius: 8px;
  padding-right: 0;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.2);
  max-width: 800px;
`;

export const MessageInput = styled.input`
  border: 0;
  background: none;
  color: #cdcdcd;
  width: 100%;
  height: 100%;
  padding: 3%;
  resize: none;
  border-radius: 8px;
  outline: none;
`;

export const AvatarWrapper = styled.div`
  width: 5%;
  display: inline-block;
  float: right;
`;

export const FullWidthBlockDiv = styled.div`
  display: inline-block;
  width: 100%;
`;
