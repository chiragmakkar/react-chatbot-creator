/**
 * Application Layout
 */
import React from 'react';
import { Layout, Row, Col } from 'antd';
import SafeEval from 'safe-eval';
import CodeEditor from '../../components/CodeEditor';
import Button from '../../components/Button';
import ChatScreen from '../../components/ChatScreen';
const { Header, Content } = Layout;

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
    <div>
      <Header
        style={{
          padding: 'unset',
          backgroundColor: '#171717',
          color: 'white',
        }}
      >
        <Row>
          <Col span={6}>AI Playground</Col>
          <Col span={12} />
          <Col span={2}>Learn AI</Col>
          <Col span={2}>Docs</Col>
          <Col span={2}>Account</Col>
        </Row>
      </Header>
      <Content
        style={{
          padding: 'unset',
          backgroundColor: '#171717',
          color: 'white',
          height: '100vh',
        }}
      >
        <Row>
          <Col span={10}>
            <Row style={{ border: 'solid 2px #2b2b2b' }}>
              <Col span={18}>{val}</Col>
              <Col span={6}>
                <Button onClick={evaluateCode}>Apply Changes</Button>
              </Col>
            </Row>
            <Row style={{ border: 'solid 2px #2b2b2b' }}>
              <CodeEditor setCode={setCode} />
            </Row>
          </Col>
          <Col style={{ border: 'solid 2px #2b2b2b' }} span={14}>
            <ChatScreen />
          </Col>
        </Row>
      </Content>
    </div>
  );
}
