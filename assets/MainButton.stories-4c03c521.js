import{j as a}from"./jsx-runtime-ffb262ed.js";import{M as B}from"./Button-63163bde.js";import{i as x,s as S}from"./inject-styles-a5bba7af.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styles-36622289.js";const j=x(S.div`
  display: inline-flex;
  width: 1em;
  height: 1em;
  ${r=>r.noMargin?"":"margin-left: 0.5em;"}
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  transition: opacity 0.5s;

  opacity: ${r=>r.hidden?"0":"1"};

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`),_={component:B,argTypes:{copied:{control:"boolean"}}},e={args:{children:"Button"}},n={args:{children:"Button",copied:!0}},s={args:{children:"Button",disabled:!0}},o={args:{children:"Button",disabled:!0},render:r=>a.jsxs(B,{...r,children:[a.jsx("span",{children:r.children}),a.jsx(j,{})]})};var t,i,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    copied: true
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,l,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    disabled: true
  }
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,f,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    disabled: true
  },
  render: args => <MainButton {...args}><span>{args.children}</span><Spinner /></MainButton>
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const $=["Default","Copied","Disabled","LoadingSpinner"];export{n as Copied,e as Default,s as Disabled,o as LoadingSpinner,$ as __namedExportsOrder,_ as default};
