/**
 * Application Layout
 */
import React from 'react';
import SafeEval from 'safe-eval';
import CodeEditor from '../../components/CodeEditor';
import ChatScreen from '../../components/ChatScreen';

export default class LayoutPage extends React.Component {
  constructor() {
    super();
    this.state = {
      val: '',
      tabs: [
        {
          name: 'index.js',
          code: `/* This is index.js \n* Please don't modify or add any other functions other than the respond function. \n*/`,
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

  setCode = code => {
    this.setState({
      tabs: this.state.tabs.map(tab => {
        if (tab.selected) tab.code = code;
        return tab;
      }),
    });
  };

  setTab = (e, tabName) => {
    this.setState(
      {
        tabs: this.state.tabs.map(tab => {
          if (tab.name === tabName) tab.selected = true;
          else tab.selected = false;
          return tab;
        }),
      },
      () => console.log(this.state),
    );
  };

  addTab = e => {
    const name = prompt('Please enter file name.');
    if (name)
      this.setState({
        tabs: [
          ...this.state.tabs.map(tab => {
            if (tab.selected) tab.selected = false;
            return tab;
          }),
          {
            name: `${name}.js`,
            code: `/* This is ${name}.js \n* \n*/`,
            deletable: true,
            selected: true,
          },
        ],
      });
  };

  removeTab = (e, name) => {
    let tabs = JSON.parse(JSON.stringify(this.state.tabs));
    tabs = tabs.filter(tab => tab.name !== name);
    console.log(tabs);
    tabs[0].selected = true;
    this.setState({
      tabs,
    });
  };

  setVal = val => {
    this.setState({ val });
  };

  evaluateCode = () => {
    try {
      const output = SafeEval(code);
      if (typeof output === 'function') setVal(output.apply());
    } catch (error) {
      // console.log(error);
    }
  };

  render() {
    const { code } = this.state.tabs.find(tab => tab.selected);
    return (
      <div style={{ height: '100%', fontFamily: 'Quicksand' }}>
        <div
          style={{
            display: 'inline-block',
            padding: 'unset',
            backgroundColor: '#171717',
            color: 'white',
            width: '100%',
            height: '5%',
            padding: '1% 2% 2% 2%',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              width: '25%',
              fontFamily: 'AmericanTypewriter',
              fontSize: '18px',
              opacity: 0.8,
              fontWeight: 'normal',
              fontStretch: 'normal',
              fontStyle: 'normal',
              lineHeight: 'normal',
              letterSpacing: 'normal',
              color: '#ffffff',
            }}
          >
            AI Playground
          </div>
          <div style={{ display: 'inline-block', width: '50%' }} />
          <div
            style={{
              display: 'inline-block',
              width: '8%',
              fontFamily: 'Quicksand',
              fontSize: '12px',
              fontWeight: '500',
              fontStretch: 'normal',
              fontStyle: 'normal',
              lineHeight: 'normal',
              letterSpacing: 'normal',
              color: '#c6c6c6',
            }}
          >
            Learn AI
          </div>
          <div
            style={{
              display: 'inline-block',
              width: '8%',
              fontFamily: 'Quicksand',
              fontSize: '12px',
              fontWeight: '500',
              fontStretch: 'normal',
              fontStyle: 'normal',
              lineHeight: 'normal',
              letterSpacing: 'normal',
              color: '#c6c6c6',
            }}
          >
            Docs
          </div>
          <div
            style={{
              display: 'inline-block',
              width: '8%',
              fontFamily: 'Quicksand',
              fontSize: '12px',
              fontWeight: '500',
              fontStretch: 'normal',
              fontStyle: 'normal',
              lineHeight: 'normal',
              letterSpacing: 'normal',
              color: '#c6c6c6',
            }}
          >
            Account
          </div>
        </div>
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
          <div style={{ display: 'inline-block', width: '40%' }}>
            <div
              style={{
                // borderRight: 'solid 2px #2b2b2b',
                borderTop: 'solid 2px #2b2b2b',
                display: 'inline-block',
                width: '100%',
                height: '5%',
                padding: '1% 1% 0% 1%',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  width: '75%',
                  height: '100%',
                }}
              >
                {this.state.tabs.map(tab => (
                  <div
                    style={{
                      fontFamily: 'Quicksand',
                      fontSize: '12px',
                      fontWeight: '500',
                      fontStretch: 'normal',
                      fontStyle: 'normal',
                      lineHeight: 'normal',
                      letterSpacing: 'normal',
                      color: '#c6c6c6',
                      marginLeft: !tab.deletable ? '3%' : undefined,
                      borderLeft: !tab.deletable
                        ? 'solid 2px #2b2b2b'
                        : undefined,
                      borderTop: 'solid 2px #2b2b2b',
                      borderRight: 'solid 2px #2b2b2b',
                      minWidth: '13%',
                      padding: '1.5% 1% 1% 1%',
                      borderTopLeftRadius: '4px',
                      borderTopRightRadius: '4px',
                      height: '100%',
                      backgroundColor: tab.selected ? '#1f1f1f' : '#171717',
                      display: 'inline-block',
                    }}
                    // onClick={e => this.setTab(e, tab.name)}
                  >
                    <span onClick={e => this.setTab(e, tab.name)}>
                      {tab.name}
                    </span>
                    {tab.deletable ? (
                      <span
                        style={{ marginLeft: '15%' }}
                        onClick={e => this.removeTab(e, tab.name)}
                      >
                        &times;
                      </span>
                    ) : (
                      ''
                    )}
                  </div>
                ))}
                <div
                  style={{
                    width: '2%',
                    display: 'inline-block',
                    marginLeft: '2%',
                  }}
                  onClick={this.addTab}
                >
                  +
                </div>
              </div>
              <div style={{ display: 'inline-block', width: '25%' }}>
                <button
                  style={{
                    backgroundColor: '#66d68d',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: 'darkslategrey',
                  }}
                  onClick={this.evaluateCode}
                >
                  Apply Changes
                </button>
              </div>
            </div>
            <div
              style={{
                // border: 'solid 2px #2b2b2b',
                display: 'inline-block',
                width: '100%',
              }}
            >
              <CodeEditor setCode={this.setCode} code={code} />
            </div>
          </div>
          <div
            style={{
              border: 'solid 2px #2b2b2b',
              // borderRight: 'solid 2px #2b2b2b',
              // borderTop: 'solid 2px #2b2b2b',
              display: 'inline-block',
              width: '60%',
            }}
          >
            <ChatScreen />
          </div>
        </div>
      </div>
    );
  }
}
