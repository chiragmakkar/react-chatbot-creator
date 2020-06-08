import React from 'react';
import CodeEditor from '../CodeEditor';
import ChatScreen from '../ChatScreen';
import Header from '../../components/Header';

export default class LayoutPage extends React.Component {
  constructor() {
    super();
    this.state = {
      val: '',
      tabs: [
        {
          name: 'index.js',
          code: `/* This is index.js \n* Please don't modify/add any functions apart from respond function. \n*/ \nasync function respond(input) {
    return "ok"
}`,
          deletable: false,
          selected: true,
        },
        {
          name: 'test.js',
          code: '/* This is test.js \n* \n*/',
          deletable: true,
          selected: false,
        },
      ],
    };
  }

  evaluateCode = input => {
    return new Promise(async (resolve, reject) => {
      try {
        const output = SafeEval(this.state.tabs[0].code);
        await sleep(1500);
        if (typeof output === 'function') {
          const result = output.call(output, input);
          return resolve(result);
        } else return reject('Invalid code.');
      } catch (error) {
        return console.log(error) || reject('Something went wrong.');
      }
    });
  };

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
