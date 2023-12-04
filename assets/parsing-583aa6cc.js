import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as t}from"./index-d7a79eca.js";import"./Table-92ceadca.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d3e8958d.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function o(n){const s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Logical expressions/Parsing"}),`
`,e.jsx(s.h1,{id:"dsl-parsing",children:"DSL parsing"}),`
`,e.jsxs(s.p,{children:[`The logical expressions is parsed as part of the wizard flow logic, but if you want to use
the dsl parser to build functions from logical expressions you can do so by importing it
from the `,e.jsx("code",{children:"losen"})," package."]}),`
`,e.jsx(s.h2,{id:"parse-your-own-expressions",children:"Parse your own expressions"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import { dsl } from "losen";

const expression = { field: "some.field", operator: "gt", value: 4 };
const state = { some: { field: 8 } };

// A function is returned from parse, that can be called with data
// to validate the expression agains.
const func = dsl.parse(expression);

console.log(func(state));
// -> { errors: [], valid: true }
`})}),`
`,e.jsx(s.p,{children:"If the provided expression is malformed, the parser will throw an expression."})]})}function b(n={}){const{wrapper:s}=Object.assign({},r(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{b as default};
