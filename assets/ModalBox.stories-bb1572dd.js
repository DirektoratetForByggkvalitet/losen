import{j as r}from"./jsx-runtime-ffb262ed.js";import{i,s}from"./inject-styles-a5bba7af.js";import{H as m}from"./Heading-0739380d.js";import{L as p}from"./Paragraphs-f90423ee.js";import{M as c,S as u}from"./Button-63163bde.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styles-36622289.js";const d=i(s.div`${({styles:t})=>`
  display: block;
  max-width: ${t.size.blockWidth};
  background: ${t.color2.sectionBackground};
  border-radius: ${t.borderRadius.large};
  padding: ${t.padding.xLarge};
  animation: modalIn 1000ms ${t.easing.easeOut};
  > button:not(:last-child) {
    margin-right: ${t.padding.small};
  }
  @media screen and (max-width: 400px) {
    padding: ${t.padding.xLarge} ${t.padding.large};
  }
  @keyframes modalIn {
    0% { opacity: 0; transform: translateY(2em); }
  }
  `}`),$={component:d},a={render:()=>r.jsxs(d,{children:[r.jsx(m,{children:"Vil du starte på nytt?"}),r.jsx(p,{children:"Veiviseren husker svarene fra ditt forrige besøk."}),r.jsx(c,{type:"button",children:"Fortsett"}),r.jsx(u,{type:"button",children:"Start på nytt"})]})};var n,e,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <ModalBox>
        <H1>Vil du starte på nytt?</H1>
        <Lead>
          Veiviseren husker svarene fra ditt forrige besøk.
        </Lead>
        <MainButton type="button">
          Fortsett
        </MainButton>
        <SecondaryButton type="button">
          Start på nytt
        </SecondaryButton>
      </ModalBox>
}`,...(o=(e=a.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const j=["Default"];export{a as Default,j as __namedExportsOrder,$ as default};
