import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Grid = injectStyles(styled.div`
  display: grid;
  grid-template-areas: "header header"
                        "aside main"
                        "aside navigation"
                        "footer footer";
  grid-template-columns: 150px 1fr;
  grid-template-rows: 60px 1fr 80px 60px;
  min-height: 100vh;
  @media screen and (max-width: 600px) {
          grid-template-areas: "header"
                               "aside"
                               "main"
                               "navigation"
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
