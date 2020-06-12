/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import GlobalStyle from '../../global-styles';
import LayoutPage from '../LayoutPage';
import store from '../../store';

const AppWrapper = styled.div`
  max-width: 100vw;
  height: 100%;
  // margin: 0 auto;
  display: flex;
  min-height: 100%;
  // padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Helmet
          titleTemplate="%s | Chatbot Creator"
          defaultTitle="Chatbot Creator"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <LayoutPage />
        <GlobalStyle />
      </AppWrapper>
    </Provider>
  );
}
