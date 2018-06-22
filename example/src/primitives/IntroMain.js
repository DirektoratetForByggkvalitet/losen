import styled from 'styled-components';

export const IntroMain = styled.main`
  margin: 0 auto;
  max-width: 1000px;
  padding: 75px 20px 200px;
  button {
    display: block;
    &::before, &::after {
      display: none !important;
    }
  }
  figure {
    float: right;
    max-width: 300px;
  }
  header.temp {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 75px;
    background: #072938;
    color: white;
    font-size: 12px;
  }
  @media screen and (max-width: 700px) {
    figure {
      float: none;
    }
  }
  @media screen and (max-width: 900px) {
    button {
      min-width: 40% !important;
      text-align: center !important;
    }
  }
  @media screen and (max-width: 400px) {
    button {
      width: 100% !important;
    }
  }
`;

export const H2 = styled.h1`background-color: pink;`;
