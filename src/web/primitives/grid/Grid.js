import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Grid = injectStyles(styled.div`
  display: grid;
  grid-template-areas: "header header"
                       "aside main"
                       "footer footer";
  grid-template-columns: ${({ styles }) => styles.size.asideWidth} 1fr;
  grid-template-rows: ${({ styles }) => styles.size.headerHeight} 1fr 60px;
  min-height: 100vh;
  justify-content: center;
  @media screen and (max-width: 700px) {
          grid-template-areas: "header"
                               "aside"
                               "main"
                               "footer";
          grid-template-columns: 100%;
          grid-template-rows: ${({ styles }) => styles.size.headerHeight}
                              auto
                              1fr
                              80px;
          grid-gap: 0;
      }
  }
`);

export default Grid;
