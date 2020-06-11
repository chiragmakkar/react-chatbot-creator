import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .is-typing {
    // margin-top: 100px;
    // width: 20%;
    justify-content: space-around;
    display: flex;
    padding-bottom: 10%;
  }

  .jump1,
  .jump2,
  .jump3 {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: white;
  }

  .jump1 {
    animation: typing 1s infinite;
    animation-delay: 0s;
  }

  .jump2 {
    animation: typing 1s infinite;
    animation-delay: 0.1s;
  }

  .jump3 {
    animation: typing 1s infinite;
    animation-delay: 0.2s;
  }

  @keyframes typing {
    0% {
      transform: translateY(4px);
      background-color: gray;
    }
    50% {
      transform: translateY(15px);
    }
    // 66% {
    //   transform: translateY(-10px);
    // }
    100% {
      transform: translateY(4px);
    }
  }
`;

export default GlobalStyle;
