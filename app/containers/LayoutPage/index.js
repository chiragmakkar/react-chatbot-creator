import React from 'react';
import SafeEval from 'safe-eval';
import CodeEditor from '../CodeEditor';
import ChatScreen from '../ChatScreen';
import Header from '../../components/Header';
import sleep from '../../utils/sleep';

export default class LayoutPage extends React.Component {
  constructor() {
    super();
    this.state = {
      code: '',
    };
  }

  setCode = code => {
    this.setState({ code });
  };

  evaluateCode = input =>
    new Promise(async (resolve, reject) => {
      try {
        const output = SafeEval(this.state.code);
        await sleep(1500);
        if (typeof output === 'function') {
          const result = output.call(output, input);
          return resolve(result);
        }
        return reject('Invalid code.');
      } catch (error) {
        return console.log(error) || reject('Something went wrong.');
      }
    });

  render() {
    return (
      <div style={{ height: '100%', fontFamily: 'Quicksand' }}>
        <Header />
        <div
          style={{
            padding: 'unset',
            backgroundColor: '#171717',
            color: 'white',
            height: '95%',
            width: '100%',
            display: 'flex',
          }}
        >
          <CodeEditor setCode={this.setCode} />
          <ChatScreen getResponse={this.evaluateCode} />
        </div>
      </div>
    );
  }
}
