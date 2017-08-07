import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Grid = injectStyles(styled.div`
  display: grid;
  grid-template-areas: "header header"
                       "aside main"
                       "footer footer";
  grid-template-columns: 300px 1fr;
  grid-template-rows: 60px 1fr 60px;
  grid-gap: 0 30px;
  min-height: 100vh;
  justify-content: center;
  @media screen and (max-width: 600px) {
          grid-template-areas: "header"
                               "aside"
                               "main"
                               "footer";
          grid-template-columns: 100%;
          grid-template-rows: 60px
                              60px
                              1fr
                              80px
                              60px;
      }
  }
`);

export default Grid;
