import React from 'react';
import CodeEditor from '../CodeEditor';
import ChatScreen from '../ChatScreen';
import Header from '../../components/Header';
import { ParentStyledWrapper, LayoutStyledWrapper } from './style';

export default function LayoutPage() {
  return (
    <ParentStyledWrapper>
      <Header />
      <LayoutStyledWrapper>
        <CodeEditor />
        <ChatScreen />
      </LayoutStyledWrapper>
    </ParentStyledWrapper>
  );
}
