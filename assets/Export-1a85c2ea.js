import{i as a,s as d}from"./inject-styles-a5bba7af.js";const e=a(d.nav`${({styles:i,tocExpanded:n})=>`
  width: ${i.size.navWidth};
  margin: 0;
  overflow: hidden;
  top: ${i.padding.medium};
  position: sticky;
  display: flex;
  flex-direction: column;
  gap: ${i.padding.xxSmall};
  border-radius: ${i.borderRadius.large};
  button {
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  @media screen and (max-width: 900px) {
    width: ${i.size.mobileContentWidth};
    margin: 0 auto;
    position: static;
  }
  @media print {
    display: none;
  }
  ${n?`@media screen and (max-width: 900px) {
    max-height: 0;
    padding: 0;
  }`:` @media screen and (max-width: 900px) {
    max-height: 1000px;
    margin-bottom: ${i.padding.small};
    transition: max-height 0.3s ease-in-out;
  }
  `}
`}`),r=a(d.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`),p=a(d.div`${({styles:i,large:n,xLarge:t})=>`
  background: ${i.color2.sectionBackground};
  ${t||n?"":`padding: ${i.padding.small};`}
  ${n?`padding: ${i.padding.large};`:""}
  ${t?`
  padding: ${i.padding.xLarge};
  @media screen and (max-width: 900px) {
    padding: ${i.padding.large};
  }
  `:""}
`}`);a(d.div`
    ${({styles:i})=>`
  width: 100%;
  margin-bottom: ${i.padding.medium};
`}
  `);const m=a(d.div`${({styles:i})=>`
  display: flex;
  min-height: 100vh;
  width: 100%;
  max-width: ${i.size.pageWidth};
  margin: 0 auto;
  @media screen and (max-width: 900px) {
    display: block;
  }
  @media print {
    display: block;
  }
`}`),g=a(d.main`${({styles:i,debug:n})=>`
  background: ${i.color2.sectionBackground};
  padding: ${i.padding.xLarge};
  margin-left: ${i.padding.large};
  border-radius: ${i.borderRadius.large};
  overflow: hidden;

  @media print {
    margin: 0 auto;
    background: none;
  }

  h2 {
    margin-top: 0;
  }

  ${n?`
  position: relative;

  :before {
    content: attr(data-id);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: deeppink;
    color: white;
    font-size: 14px;
    padding: 2px 6px;
  }`:""} 
  
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: ${i.padding.xLarge} ${i.padding.medium};
    margin: 0 auto;
  }

`}`);a(d.main`
  display: flex;
  margin-bottom: 50px;
  max-width: ${({styles:i})=>i.size.blockWidth};
`);a(d.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  ${({padItems:i})=>i?`
    > * {
      margin-right: 1px !important;

      &:last-child { margin-right: 0 !important; }
    }
`:""}

  @media screen and (max-width: 900px) {
    display: block;
  }

  @media print {
    display: block;
  }
`);const c=a(d.div`
  display: block;
  width: 100%;
  &:focus {
    outline: none;
  }
`);a(d.div`
  @media print {
    display: none;
  }
`);export{c as F,m as G,g as M,e as N,p as a,r as b};
