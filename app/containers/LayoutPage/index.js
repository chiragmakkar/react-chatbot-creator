import React from 'react';
import CodeEditor from '../CodeEditor';
import ChatScreen from '../ChatScreen';
import Header from '../../components/Header';

export default function LayoutPage() {
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
        <CodeEditor />
        <ChatScreen />
      </div>
    </div>
  );
}
