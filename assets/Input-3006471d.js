import{i as e,s as o}from"./inject-styles-aae5f119.js";const r=e(o.input.attrs({type:"checkbox"})`
  ${({$styles:i,disabled:t})=>`
  position: absolute;
  opacity: 0;
  z-index: -1;
  line-height: 1.4;
  
  + label {
    position: relative;
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    padding: ${i.padding.medium};
    border: 1px solid ${i.color2.secondaryLight};
    border-radius: ${i.borderRadius.small};
    transition: all 200ms ${i.easing.easeOut};
    font-size: ${i.text.body.fontSize};
    font-weight: ${i.text.body.fontWeight};
    line-height: ${i.text.body.lineHeight};
    letter-spacing: ${i.text.body.letterSpacing};
    color: ${i.color2.textDark};
    
    &:before {
      content: " ";
      display: inline-block;
      vertical-align: middle;
      min-width: 18px;
      width: 18px;
      height: 18px;
      margin-top: 4px;
      background: transparent;
      margin-right: ${i.padding.small};
      border: 1px solid ${i.color2.primary};
      border-radius: ${i.borderRadius.small};
      transition: all 200ms ${i.easing.easeOut};
    }

    > div {
      flex: 1;
      font-size: ${i.text.label.fontSize};
      font-weight: ${i.text.label.fontWeight};
      line-height: ${i.text.label.lineHeight};
      letter-spacing: ${i.text.label.letterSpacing};
      color: ${i.color2.textDark};
    }

    div:not(:last-child) {
      margin-right: ${i.padding.large};
    }
    img {
      width: 25%;
      max-width: 200px;
    }
    p {
      margin-bottom: 0;
    }
    h3 {
      font-size: ${i.text.lead.fontSize};
      font-weight: ${i.text.lead.boldWeight};
      line-height: ${i.text.lead.lineHeight};
      letter-spacing: ${i.text.lead.letterSpacing};
      margin-bottom: 0;
    }
  }

  ${t?`
    + label {
      cursor: default;
      opacity: 0.4;
    }
      `:`
    + label {
      &:hover {
        background: ${i.color2.secondaryXLight};
      }
    }
    &:focus + label {
      background: ${i.color2.secondaryXLight};
    }
    &:focus-visible + label {
      outline: 1px solid ${i.color2.outline};
    }
    &:checked + label:after {
      content: " ";
      position: absolute;
      left: calc(${i.padding.medium} + 5px);
      top: calc(${i.padding.medium} + 9px);
      width: 8px;
      height: 4px;
      transform: rotate(-46deg);
      border-left: 3px solid ${i.color2.primary};
      border-bottom: 3px solid ${i.color2.primary};
    }
    &:checked + label {
      background: ${i.color2.secondaryLight};
    }
    &:checked:focus + label {
      background: ${i.color2.secondaryXLight};
    }
  `}
`}
`),n=e(o.input.attrs({type:"checkbox"})`
  ${({$styles:i})=>`
  position: absolute;
  opacity: 0;
  z-index: -1;
  line-height: 1.4;

  + label {
    position: relative;
    display: flex;
    align-items: flex-start;
    margin-top: 0;
    padding: ${i.padding.xxSmall} 0;
    font-size: ${i.text.body.fontSize};
    font-weight: ${i.text.body.boldWeight};
    line-height: ${i.text.body.lineHeight};
    letter-spacing: ${i.text.body.letterSpacing};

    &:before {
      content: " ";
      display: inline-block;
      vertical-align: middle;
      min-width: 18px;
      width: 218x;
      height: 18px;
      margin-right: ${i.padding.xxSmall};
    }

    > div {
      flex: 1;
      font-size: ${i.text.label.fontSize};
      font-weight: ${i.text.label.fontWeight};
      line-height: ${i.text.label.lineHeight};
      letter-spacing: ${i.text.label.letterSpacing};
      color: ${i.color2.textDark};
    }

    div:not(:last-child) {
      margin-right: ${i.padding.large};
    }
    img {
      width: 25%;
      max-width: 200px;
    }
    p {
      margin-bottom: 0;
    }
    h3 {
      font-size: ${i.text.lead.fontSize};
      font-weight: ${i.text.lead.boldWeight};
      line-height: ${i.text.lead.lineHeight};
      letter-spacing: ${i.text.lead.letterSpacing};
      font-style: normal;
    }
  }

  &:checked + label:after {
    content: " ";
    position: absolute;
    left: 4px;
    top: calc(${i.padding.xxSmall} + 5px);
    width: 8px;
    height: 4px;
    transform: rotate(-46deg);
    border-left: 3px solid ${i.color2.primary};
    border-bottom: 3px solid ${i.color2.primary};
  }

  @media screen and (max-width: 900px) {
    + label {
      flex-wrap: wrap;
      &::before {
      }
      div {
        flex: 1;
        div {
          margin-right: 0;
        }
      }
      img {
        width: 100%;
        margin: 20px auto 0;
        display: block;
        flex: 0 0 100%;
      }
    }
  }
  @media print {
    + label { 
      border: none;
      padding: 0;
    }
  }
`}
`),d=e(o.input.attrs({type:"radio"})`
  ${({$styles:i,disabled:t})=>`
  position: absolute;
  opacity: 0;
  z-index: -1;
  line-height: 1.4;

  + label {
    position: relative;
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    padding: ${i.padding.medium};
    border: 1px solid ${i.color2.secondaryLight};
    border-radius: ${i.borderRadius.small};
    transition: all 200ms ${i.easing.easeOut};

    &:before {
      content: " ";
      display: inline-block;
      vertical-align: middle;
      min-width: 18px;
      width: 18px;
      height: 18px;
      margin-top: 3px;
      background: transparent;
      margin-right: ${i.padding.small};
      border: 1px solid ${i.color2.primary};
      border-radius: 50%;
      transition: all 200ms ${i.easing.easeOut};
    }

    > div {
      flex: 1;
      font-size: ${i.text.label.fontSize};
      font-weight: ${i.text.label.fontWeight};
      line-height: ${i.text.label.lineHeight};
      letter-spacing: ${i.text.label.letterSpacing};
      color: ${i.color2.textDark};
    }
    
    div:not(:last-child) {
      margin-right: ${i.padding.large};
    }
    img {
      width: 25%;
      max-width: 200px;
      background: ${i.color2.secondaryXLight};
    }
    p {
      margin-bottom: 0;
    }
    h3 {
      font-size: ${i.text.lead.fontSize};
      font-weight: ${i.text.lead.boldWeight};
      line-height: ${i.text.lead.lineHeight};
      letter-spacing: ${i.text.lead.letterSpacing};
      font-style: normal;
    }
  }

  ${t?`
    + label {
      opacity: 0.4;
    }`:`
    + label {
      &:hover {
        background: ${i.color2.secondaryXLight};
      }
    }
    &:focus + label {
      background: ${i.color2.secondaryXLight};
    }
    &:focus-visible + label {
      outline: 1px solid ${i.color2.outline};
    }
    &:checked + label:after {
      content: " ";
      position: absolute;
      left: calc(${i.padding.medium} + 5px);
      top: calc(${i.padding.medium} + 8px);
      width: 10px;
      height: 10px;
      transform: rotate(-46deg);
      border-radius: 50%;
      background: ${i.color2.primary};
    }
    &:checked + label {
      background: ${i.color2.secondaryLight};
    }
  `}

  @media print {
    + label { 
      border: none;
      padding: 0;
    }
  }
`}
`),l=e(o.input`
  ${({$styles:i,$validation:t})=>`
  font-family: inherit;
  font-size: ${i.text.label.fontSize} !important;
  font-weight: ${i.text.label.fontWeight};
  line-height: ${i.text.label.lineHeight};
  letter-spacing: ${i.text.label.letterSpacing};
  text-align: right;
  padding: ${i.padding.small} !important;
  width: auto !important;
  min-width: 20%;
  margin-right: 0.5em;
  border: 1px solid ${t!=null&&t.error?i.color2.error:i.color2.outline} !important;
  border-radius: ${i.borderRadius.small};
  &::placeholder {
    font-color: inherit;
    opacity: 0.75;
  }
  &:focus {
    outline: 3px solid ${i.color2.focus};
  }
`}
`),p=e(o.input`
  ${({$styles:i,$validation:t})=>`
  font-family: inherit;
  font-size: ${i.text.lead.fontSize} !important;
  font-weight: ${i.text.lead.fontWeight};
  line-height: ${i.text.lead.lineHeight};
  letter-spacing: ${i.text.lead.letterSpacing};
  padding: ${i.padding.small} !important;
  width: auto;
  min-width: 20%;
  margin-right: 0.5em;
  border: 1px solid ${t!=null&&t.error?i.color2.error:i.color2.outline} !important;
  
  border-radius: ${i.borderRadius.small};
  &::placeholder {
    font-color: inherit;
    opacity: 0.75;
  }
  &:focus {
    outline: 3px solid ${i.color2.focus};
  }
  @media screen and (max-width: 360px) {
    width: 100%;
  }
`}
`),g=e(o.textarea`
  ${({$styles:i})=>`
  font-family: inherit;
  font-size: ${i.text.body.fontSize};
  font-weight: ${i.text.body.fontWeight};
  line-height: ${i.text.body.lineHeight};
  letter-spacing: ${i.text.body.letterSpacing};
  padding: ${i.padding.small} ${i.padding.small};
  min-height: 6em;
  width: 100% !important;
  min-width: 20%;
  margin-right: 0.5em;
  border: 1px solid ${i.color2.outline};
  border-radius: ${i.borderRadius.small};
  &::placeholder {
    font-color: inherit;
    opacity: 0.75;
  }
  &:focus {
    outline: 3px solid ${i.color2.focus};
  }
`}
`),c=e(o.div`
  ${({$styles:i})=>`
  position: relative;
  width: fit-content;
  max-width: 100%;
  &::before {
    content: " ";
    pointer-events: none;
    position: absolute;
    right: 16px;
    top: 50%;
    width: 8px;
    height: 8px;
    transform: translateY(-4px) rotate(-45deg);
    border-left: 2px solid ${i.color2.primary};
    border-bottom: 2px solid ${i.color2.primary};
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    width: auto;
    max-width: 100%;
    font-family: inherit;
    font-size: ${i.text.lead.fontSize};
    font-weight: ${i.text.lead.fontWeight};
    line-height: ${i.text.lead.lineHeight};
    letter-spacing: ${i.text.lead.letterSpacing};
    padding: ${i.padding.small} ${i.padding.small};
    padding-right: 40px;
    margin-bottom: 0;
    border: 1px solid ${i.color2.primary};
    border-radius: ${i.borderRadius.small};
    background: transparent;
    transition: background 200ms ${i.easing.easeOut};
    &:hover, &:focus {
      background: ${i.color2.secondaryXLight};
    }
    &:focus {
      outline-color: ${i.color2.outline};
    }
  }
`}
`);export{r as C,l as N,d as R,c as S,p as T,n as a,g as b};
