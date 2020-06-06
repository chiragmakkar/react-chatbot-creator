/**
 * Application Layout
 */
import React from 'react';
import { Layout, Row, Col } from 'antd';
import CodeEditor from '../../components/CodeEditor';
import Button from '../../components/Button';

const { Header, Content } = Layout;

export default function LayoutPage() {
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
              <Col span={18} />
              <Col span={6}>
                <Button>Apply Changes</Button>
              </Col>
            </Row>
            <Row style={{ border: 'solid 2px #2b2b2b' }}>
              <CodeEditor />
            </Row>
          </Col>
          <Col style={{ border: 'solid 2px #2b2b2b' }} span={14}>
            Chatbot
          </Col>
        </Row>
      </Content>
    </div>
  );
}
