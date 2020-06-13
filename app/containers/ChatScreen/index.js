import React from 'react';
import uuid from 'uuid/dist/v4';
import UserImg from './user.jpg';
import BotImg from './bot.jpg';
import { connect } from 'react-redux';
import { sendMessage, setMessage, setTypingStatus } from './action';
import safeEval from '../../utils/safeEval';
import {
  ChatScreenWrapper,
  MessageBoxWrapper,
  MessageListWrapper,
  MessageInputWrapper,
  MessageInput,
  UserMessageRowWrapper,
  BotMessageRowWrapper,
  FullWidthBlockDiv,
} from './style';
import { MessageTypography } from '../../components/Typography';
import TypingIndicator from '../../components/TypingIndicator';
import Avatar from '../../components/Avatars';

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        // {
        //   sender: 'user',
        //   value: 'hey there bot',
        //   id: '1',
        // },
        // {
        //   sender: 'bot',
        //   value: 'ok',
        //   id: '2',
        // },
      ],
      isTyping: false,
      currentMessage: '',
      code: '',
    };
  }

  componentDidUpdate() {
    this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
  }

  setCurrentMessage = (e, value) => {
    this.props.setMessage(e ? e.target.value : value);
  };

  setStateSynchronous = async state =>
    new Promise((resolve, reject) => {
      this.setState(state, () => resolve());
    });

  handleEnter = async e => {
    const { value } = e.target;
    const { code } = this.props;
    this.props.sendMessage({
      sender: 'user',
      value: value,
      id: uuid(),
    });
    this.props.setTypingStatus(true);
    try {
      const response = await safeEval(value, code);
      this.props.sendMessage({
        sender: 'bot',
        value: response,
        id: uuid(),
      });
      this.props.setTypingStatus(false);
    } catch (error) {
      this.props.setTypingStatus(false);
      console.log(error);
    }
  };

  render() {
    return (
      <ChatScreenWrapper>
        <MessageBoxWrapper>
          <MessageListWrapper ref={chatDiv => (this.chatDiv = chatDiv)}>
            {this.props.messages.map(message => {
              if (message.sender === 'user') {
                return (
                  <UserMessageRowWrapper key={message.id}>
                    <Avatar src={UserImg} align="left" />
                    <MessageTypography align="left">
                      <div>{message.value}</div>
                    </MessageTypography>
                  </UserMessageRowWrapper>
                );
              }
              return (
                <BotMessageRowWrapper key={message.id}>
                  <Avatar src={BotImg} align="right" />
                  <MessageTypography align="right">
                    <div>{message.value}</div>
                  </MessageTypography>
                </BotMessageRowWrapper>
              );
            })}
            {this.props.isTyping ? (
              <FullWidthBlockDiv key="isTypingMessage">
                <Avatar src={BotImg} align="right" />
                <TypingIndicator />
              </FullWidthBlockDiv>
            ) : (
              ''
            )}
          </MessageListWrapper>
          <MessageInputWrapper>
            <MessageInput
              type="text"
              placeholder="Type message here.."
              value={this.props.currentMessage}
              onChange={this.setCurrentMessage}
              onKeyUp={e => (e.key === 'Enter' ? this.handleEnter(e) : {})}
            />
          </MessageInputWrapper>
        </MessageBoxWrapper>
      </ChatScreenWrapper>
    );
  }
}

const mapStateToProps = ({ code, chat }) => {
  return { ...chat, code: code.tabs.length ? code.tabs[0].code : '' };
};

export default connect(
  mapStateToProps,
  { sendMessage, setTypingStatus, setMessage },
)(ChatScreen);
