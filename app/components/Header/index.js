import React from 'react';

export default function Header() {
  return (
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
  );
}
