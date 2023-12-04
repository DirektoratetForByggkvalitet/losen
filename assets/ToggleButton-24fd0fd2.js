import{i as r,s as a}from"./inject-styles-aae5f119.js";const d=r(a.button`
  ${({$styles:o,$visible:i})=>`
  width: ${o.size.mobileContentWidth};
  margin: 0 auto;
  margin-bottom: ${o.padding.small};
  background: transparent;
  color: ${o.color2.primary};
  border: 1px solid ${o.color2.primary};
  border-radius: ${o.borderRadius.small};
  font-size: ${o.text.body.fontSize};
  font-weight: ${o.text.body.boldWeight};
  line-height: ${o.text.body.lineHeight};
  letter-spacing: ${o.text.body.letterSpacing};
  padding: ${o.padding.small} ${o.padding.large};
  cursor: pointer;
  display: ${i?"block":"none"};
  span {
    margin-left: ${o.padding.small};
  }
  &:hover,
  &:focus {
    color: ${o.color2.link};
    background: ${o.color2.secondaryXLight};
  }
  @media screen and (max-width: 900px) {
    display: block;
  }
`}
`);export{d as T};
