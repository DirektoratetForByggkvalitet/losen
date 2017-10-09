import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Loading = injectStyles(styled.div`
  background: ${({ styles }) => styles.color.lightgreen};
  padding: 10px 24px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  &::after {
    content: "...";
    animation: dotdotdot 2s linear infinite;
  }
  @keyframes dotdotdot {
    0% {
      content: " ";
    }
    25% {
      content: ".";
    }
    50% {
      content: "..";
    }
    75% {
      content: "...";
    }
    100% {
      content: "...";
    }
  }
`);

export default Loading;
