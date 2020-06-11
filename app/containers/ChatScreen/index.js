import React from 'react';
import uuid from 'uuid/dist/v4';
import UserImg from './user.jpg';
import BotImg from './bot.jpg';

class ChatScreen extends React.Component {
  constructor() {
    super();
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

  setCurrentMessage = (e, value) => {
    this.setState({ currentMessage: e ? e.target.value : value });
  };

  setStateSynchronous = async state =>
    new Promise((resolve, reject) => {
      this.setState(state, () => resolve());
    });

  handleEnter = async e => {
    const { value } = e.target;
    this.setCurrentMessage(null, '');
    await this.setStateSynchronous({
      messages: [
        ...this.state.messages,
        { sender: 'user', value: e.target.value, id: uuid() },
      ],
    });
    this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
    await this.setStateSynchronous({ isTyping: true });
    try {
      const response = await this.props.getResponse(value);
      this.setState(
        {
          isTyping: false,
          messages: [
            ...this.state.messages,
            { sender: 'bot', value: response, id: uuid() },
          ],
        },
        () => (this.chatDiv.scrollTop = this.chatDiv.scrollHeight),
      );
    } catch (error) {
      console.log(error);
    }
  };

  handleBotResponse = value => {
    this.setState({
      messages: [...this.state.messages, { sender: 'bot', value, id: uuid() }],
    });
  };

  render() {
    return (
      <div
        style={{
          border: 'solid 2px #2b2b2b',
          // borderRight: 'solid 2px #2b2b2b',
          // borderTop: 'solid 2px #2b2b2b',
          display: 'inline-block',
          width: '60%',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            padding: '10%',
            fontFamily: 'Quicksand',
            fontSize: '14px',
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#d3d3d3',
          }}
        >
          <div
            style={{
              backgroundColor: '#1f1f1f',
              height: '70%',
              padding: '5%',
              overflowY: 'scroll',
            }}
            ref={chatDiv => (this.chatDiv = chatDiv)}
          >
            {this.state.messages.map(message => {
              if (message.sender === 'user') {
                return (
                  <div
                    style={{
                      display: 'inline-block',
                      width: '100%',
                      marginTop: '2%',
                    }}
                    key={message.id}
                  >
                    <div
                      style={{
                        width: '5%',
                        display: 'inline-block',
                        float: 'left',
                      }}
                    >
                      <img
                        src={UserImg}
                        style={{
                          height: '30px',
                          width: '30px',
                          borderRadius: '50%',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        // minWidth: '30%',
                        minHeight: '15%',
                        backgroundColor: '#404040',
                        borderRadius: '16px',
                        padding: '2%',
                        // width: '30%',
                        display: 'block',
                        float: 'left',
                        marginLeft: '2%',
                      }}
                    >
                      <div>{message.value}</div>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={message.id}
                  style={{
                    display: 'inline-block',
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '5%',
                      display: 'inline-block',
                      float: 'right',
                    }}
                  >
                    <img
                      src={BotImg}
                      style={{
                        height: '30px',
                        width: '30px',
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      // marginTop: '2%',
                      // minWidth: '30%',
                      minHeight: '15%',
                      backgroundColor: '#404040',
                      borderRadius: '16px',
                      padding: '2%',
                      // width: '30%',
                      display: 'block',
                      float: 'right',
                      marginRight: '2%',
                    }}
                  >
                    <div>{message.value}</div>
                  </div>
                </div>
              );
            })}
            {this.state.isTyping ? (
              <div
                key="isTypingMessage"
                style={{
                  display: 'inline-block',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    width: '5%',
                    display: 'inline-block',
                    float: 'right',
                  }}
                >
                  <img
                    src={BotImg}
                    style={{
                      height: '30px',
                      width: '30px',
                      borderRadius: '50%',
                    }}
                  />
                </div>
                <div
                  style={{
                    // marginTop: '2%',
                    minWidth: '10%',
                    minHeight: '15%',
                    backgroundColor: '#404040',
                    borderRadius: '16px',
                    padding: '1% 2% 3% 2%',
                    width: '10%',
                    display: 'block',
                    float: 'right',
                    marginRight: '2%',
                  }}
                >
                  {/* <div>Typing...</div> */}
                  <div className="is-typing">
                    <div className="jump1" />
                    <div className="jump2" />
                    <div className="jump3" />
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
          <div
            style={{
              backgroundColor: '#1f1f1f',
              height: '12.5%',
              marginTop: '5%',
              width: '100%',
              // position: 'absolute',
              // top: '62%',
              // left: 0,
              // right: 0,
              // margin: 'auto',
              marginTop: '5%',
              background: '#1f1f1f',
              borderRadius: '8px',
              paddingRight: 0,
              boxShadow: '0 0 20px 5px rgba(0,0,0,.2)',
              maxWidth: '800px',
            }}
          >
            <input
              type="text"
              style={{
                border: 0,
                background: 'none',
                color: '#cdcdcd',
                width: '100%',
                height: '100%',
                padding: '3%',
                resize: 'none',
                borderRadius: '8px',
                outline: 'none',
              }}
              placeholder="Type message here.."
              value={this.state.currentMessage}
              onChange={this.setCurrentMessage}
              onKeyUp={e => (e.key === 'Enter' ? this.handleEnter(e) : {})}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChatScreen;
