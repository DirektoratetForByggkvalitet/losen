import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Grid = injectStyles(styled.div`
  display: grid;
  grid-template-areas: "nav main";
  grid-template-columns: ${({ styles }) => styles.size.navWidth} 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;
  max-width: calc(${({ styles }) => styles.size.asideWidth} + 800px);
  margin: 0 auto;
  @media screen and (max-width: 700px) {
          grid-template-areas: "nav"
                               "main";
          grid-template-columns: 100%;
          grid-template-rows: auto
                              1fr;
      }
  }
`);

export default Grid;
