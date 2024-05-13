import{j as e}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{M as r,b as o}from"./index-00468680.js";import{s as a}from"./styles-36622289.js";import{u as i}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-67bbf1e6.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function n(t){const s=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Design/Theming"}),`
`,e.jsx(s.h1,{id:"theming",children:"Theming"}),`
`,e.jsx(s.p,{children:"Losen is based on DiBK's design system, but it is quite easy to change it to accomodate other design systems."}),`
`,e.jsx(s.h2,{id:"overriding-styles",children:"Overriding styles"}),`
`,e.jsxs(s.p,{children:["You find all used theme variables in the file ",e.jsx(s.code,{children:"losen/styles.ts"}),". Here you have color variables, font families, border radius, padding, easing, sizes and typograhpy. It is possible to theme losen closer to your design system just by altering these variables."]}),`
`,e.jsxs(s.p,{children:["The default theme variables can be overridden by the ",e.jsx(s.code,{children:"styles"})," prop in ",e.jsx(s.code,{children:"Wizard"})," like so:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { Wizard } from 'losen'
import schema from './schema'
import customTheme from './customTheme.tsx'

<Wizard wizard={schema} styles={customTheme} />
`})}),`
`,e.jsx(s.h2,{id:"default-styles",children:"Default styles"}),`
`,e.jsx(s.p,{children:"Use the default styles file as baseline when overriding. All variables need to be present in the custom theme file."}),`
`,e.jsx(o,{code:JSON.stringify(a,null,2),language:"json",format:!0,type:"dynamic"})]})}function b(t={}){const{wrapper:s}=Object.assign({},i(),t.components);return s?e.jsx(s,Object.assign({},t,{children:e.jsx(n,t)})):n(t)}export{b as default};
