/**
 * Application Layout
 */
import React from 'react';
import SafeEval from 'safe-eval';
import CodeEditor from '../../components/CodeEditor';
import ChatScreen from '../../components/ChatScreen';

export default function LayoutPage() {
  const [code, setCode] = React.useState('');
  const [val, setVal] = React.useState('');
  const evaluateCode = () => {
    try {
      const output = SafeEval(code);
      if (typeof output === 'function') setVal(output.apply());
    } catch (error) {
      // console.log(error);
    }
  };
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
              borderRight: 'solid 2px #2b2b2b',
              borderTop: 'solid 2px #2b2b2b',
              display: 'inline-block',
              width: '100%',
            }}
          >
            <div style={{ display: 'inline-block', width: '75%' }}>{val}</div>
            <div style={{ display: 'inline-block', width: '25%' }}>
              <button
                style={{
                  backgroundColor: '#66d68d',
                  borderRadius: '4px',
                  fontSize: '12px',
                }}
                onClick={evaluateCode}
              >
                Apply Changes
              </button>
            </div>
          </div>
          <div
            style={{
              border: 'solid 2px #2b2b2b',
              display: 'inline-block',
              width: '100%',
            }}
          >
            <CodeEditor setCode={setCode} />
          </div>
        </div>
        <div
          style={{
            borderRight: 'solid 2px #2b2b2b',
            borderTop: 'solid 2px #2b2b2b',
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
