import{i as a,s as t}from"./inject-styles-aae5f119.js";const e=a(t.a`
  ${({$styles:o,$active:r,$errors:i,$done:n})=>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: ${o.borderRadius.small};
  padding: ${o.padding.small};
  margin-bottom: ${o.padding.xxSmall};
  transition: background 400ms ${o.easing.easeOut};
  ${n?`background: ${o.color2.positiveXLight};`:""}
  ${i?`background: ${o.color2.errorXLight};`:""}
  ${r?`background: ${o.color2.secondaryLight};`:""}
  ${!(n||i)||r?`color: ${o.color2.link};`:""}
  ${n?`color: ${o.color2.positive};`:""}
  ${i?`color: ${o.color2.error};`:""}
  &:hover {
    cursor: pointer;
    ${r||n||i?"":`background: ${o.color2.secondaryXLight};`}
    ${n?`background: ${o.color2.positiveLight};`:""}
    ${i?`background: ${o.color2.errorLight};`:""}
    ${r?`background: ${o.color2.secondaryLight};`:""}
    p {
      text-decoration: underline;
    }
  }
  span {
    display: flex;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    min-width: 12px;
    max-width: 100%;
  }
  p {
    flex-grow: 1;
    font-size: ${o.text.body.fontSize};
    font-weight: ${o.text.body.fontWeight};
    line-height: ${o.text.body.lineHeight};
    letter-spacing: ${o.text.body.letterSpacing};
    margin: 0;
    margin-left: ${o.padding.small};
  }
  svg {
    display: inline-block;
    flex-shrink: 0;
    width: ${o.iconSize.small};
    height: ${o.iconSize.small};
    opacity: 0;
    transition: opacity 400ms ${o.easing.easeOut};
  }
  &:hover svg {
    opacity: 1;
  }
  ${n||r?`
      svg {
        opacity: 1;
      }
    `:""}

  ${i?`
    &::after {
      display: inline-block;
      transform: rotate(-46deg);
      border-color: ${o.color2.negative};
    }
  `:""}
`}
`);export{e as N};
