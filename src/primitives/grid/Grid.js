import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Grid = injectStyles(styled.div`
  display: grid;
  max-width: 1200px;
  margin: 30px auto;
  grid-template-areas: "aside main"
                        "aside navigation"
                        "footer footer";
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr 80px;
  grid-gap: 0 30px;
  min-height: 100vh;
  @media screen and (max-width: 600px) {
          grid-template-areas: "aside"
                               "main"
                               "navigation";
          grid-template-columns: 100%;
          grid-template-rows: 60px
                              1fr
                              80px;
      }
  }
`);

export default Grid;
