import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Aside = injectStyles(styled.aside`
  grid-area: aside;
  padding: 20px;
  div {
    margin: 20px 0;
    background: #efefef;
    display: flex;
    &::before {
      content: attr(data-id);
      color: white;
      background: ${({ styles }) => styles.color.primary};
      padding: 10px;
      display: flex;
      align-items: center;
    }
    p {
      flex-grow: 1;
      font-weight: bold;
      padding: 0 20px;
    }
    button {
      background: none;
      border: none;
      text-decoration: underline;
      color: ${({ styles }) => styles.color.primary};
      font-size: 1em;
      font-weight: normal;
      display: block;
      padding: 0;
    }
  }
`);

export default Aside;
