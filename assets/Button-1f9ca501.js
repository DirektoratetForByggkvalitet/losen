import{i as t,s as n}from"./inject-styles-aae5f119.js";const i=t(n.button`
  ${({$styles:o,$copied:r,disabled:e})=>`
  padding: 16px ${o.padding.large};
  cursor: pointer;
  user-select: none;
  border: none;
  border-radius: 0;
  appearance: none;
  margin-bottom: 0;
  position: relative;
  background: ${o.color2.primary};
  border-radius: ${o.borderRadius.small};
  font-family: ${o.font.body};
  font-size: ${o.text.body.fontSize};
  font-weight: ${o.text.body.boldWeight};
  line-height: ${o.text.body.lineHeight};
  letter-spacing: ${o.text.body.letterSpacing};
  color: ${o.color2.textWhite};
  transition: background 200ms ${o.easing.easeOut};
  &:hover, &:focus {
    background: ${o.color2.primaryLight};
    color: ${o.color2.textWhite};
  }
  &:active {
    background: ${o.color2.primaryXLight};
    color: ${o.color2.textWhite};
  }
  &:focus {
    outline-offset: 2px;
  }
  ${r?`
      background: ${o.color2.positive};
      &:hover {
        background: ${o.color2.positive};
      }
      &:before {
        content: "\\2713  ";
      }
      `:""}
  
  ${e?`
    cursor: default;
    background: ${o.color2.secondaryLight};
    color: white;
    
    &:hover {
      background: ${o.color2.secondaryLight};
      color: white;
    }`:""}

  &:not(:last-child) {
    margin-bottom:  ${o.padding.xSmall}
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
  @media print {
      display none;
  }
`}
`),d=t(n.button`
  ${({$styles:o})=>`
  padding: 16px ${o.padding.large};
  cursor: pointer;
  user-select: none;
  border: none;
  border-radius: 0;
  appearance: none;
  margin-bottom: 0;
  position: relative;
  background: transparent;
  border-radius: ${o.borderRadius.small};
  font-family: ${o.font.body};
  font-size: ${o.text.body.fontSize};
  font-weight: ${o.text.body.boldWeight};
  line-height: ${o.text.body.lineHeight};
  letter-spacing: ${o.text.body.letterSpacing};
  color: ${o.color2.link};
  border: 1px solid ${o.color2.secondaryLight};
  transition: background 200ms ${o.easing.easeOut};
  &:hover, &:focus {
    background: ${o.color2.secondaryXLight};
    color: ${o.color2.link};
  }
  &:active {
    background: ${o.color2.secondaryLight};
  }
  &:focus {
    outline-offset: 2px;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
  @media print {
      display none;
  }
  &:not(:last-child) {
    margin-bottom:  ${o.padding.xSmall}
  }
`}
`),c=t(n.button`
  ${({$styles:o,disabled:r})=>`
  position: relative;
  appearance: none;
  font-family: ${o.font.body};
  font-size: ${o.text.body.fontSize};
  font-weight: ${o.text.body.fontWeight};
  line-height: ${o.text.body.lineHeight};
  letter-spacing: ${o.text.body.letterSpacing};
  background: none;
  color: ${o.color2.link};
  text-decoration: underline;
  cursor: pointer;
  border: 0 none;
  padding: ${o.padding.xxSmall} ${o.padding.xSmall};
  margin: 0 auto;
  margin-bottom: 10px;
  
  &:hover, &:focus {
    text-decoration: none;
    background: transparent;
    color: ${o.color2.link};
  }

  ${r?`
    cursor: default;
    opacity: 0.5;
    color: ${o.color2.textDark};
    text-decoration: none;
    `:""}

  @media print {
      display none;
  }
`}
`),g=t(n.button`
  ${({$styles:o,$next:r})=>`
  width: auto;
  padding: ${o.padding.small} ${o.padding.large};
  cursor: pointer;
  user-select: none;
  border: none;
  border-radius: 0;
  appearance: none;
  margin-bottom: 0;
  position: relative;
  background: ${o.color2.primary};
  border-radius: ${o.borderRadius.small};
  font-family: ${o.font.body};
  font-size: ${o.text.body.fontSize};
  font-weight: ${o.text.body.boldWeight};
  line-height: ${o.text.body.lineHeight};
  letter-spacing: ${o.text.body.letterSpacing};
  color: ${o.color2.textWhite};
  transition: background 200ms ${o.easing.easeOut};
  &:hover, &:focus {
    background: ${o.color2.primaryLight};
    color: ${o.color2.textWhite};
  }
  &:active {
    background: ${o.color2.primaryXLight};
  }
  &:focus {
    outline-offset: 2px;
  }
  &:before,
  &:after {
    content: " ";
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    vertical-align: middle;
    transform: ${r?"rotate(45deg)":"rotate(-135deg)"};
    border: 2px solid ${o.color2.textWhite};
    border-width: 2px 2px 0 0;
  }
  &:before {
    display: ${r?"none":"inline-block"};
    margin-right: 1em;
  }
  &:after {
    display: ${r?"inline-block":"none"};
    margin-left: 1em;
  }
  &:hover::before,
  &:focus::before,
  &:hover::after,
  &:focus::after {
    animation: ${r?"pushnext":"pushprev"} 0.8s linear
      infinite;
  }
  @keyframes pushnext {
    0% {
      transform: rotate(45deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(45deg) translate3d(2px, -2px, 0);
    }
    100% {
      transform: rotate(45deg) translate3d(0, 0, 0);
    }
  }
  @keyframes pushprev {
    0% {
      transform: rotate(-135deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-135deg) translate3d(-2px, 2px, 0);
    }
    100% {
      transform: rotate(-135deg) translate3d(0, 0, 0);
    }
  }
`}
`);export{i as M,g as N,d as S,c as a};
