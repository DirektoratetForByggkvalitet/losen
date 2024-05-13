import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-00468680.js";import"./Table-92ceadca.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-67bbf1e6.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function o(t){const n=Object.assign({h1:"h1",p:"p",em:"em",h2:"h2",code:"code",pre:"pre"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Schema/Computed props"}),`
`,e.jsx(n.h1,{id:"computed-properties",children:"Computed properties"}),`
`,e.jsx(n.p,{children:`When building complex wizards we often end up with a complex logical
structure and lots of repeated logical tests. Getting the logic right
once is a hard job, and keeping track of and updating duplicates of the
same logic in your schema is both tedious and error prone.`}),`
`,e.jsxs(n.p,{children:["Losen features ",e.jsx(n.em,{children:"computed props"}),` as a solution to this. In essence
computed props is a way of declaring a logical expression (with the DSL)
and being able to refer to the current result of that expression from
anywhere in your schema just as if it was a value in the state.`]}),`
`,e.jsx(n.h2,{id:"declaring-a-computed-prop",children:"Declaring a computed prop"}),`
`,e.jsxs(n.p,{children:["A computed prop is declared by putting a key in the ",e.jsx(n.code,{children:"computed"}),` part
of your schema, like this:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "meta": {
    //...
  },
  "computed": {
    "oldEnough": {
      "field": "age",
      "operator": "gte",
      "value": 21
    }
  },
  "schema": {
    //...
  }
}
`})}),`
`,e.jsx(n.h2,{id:"computing-the-property",children:"Computing the property"}),`
`,e.jsxs(n.p,{children:[`You don't need to compute it yourself. It will be updated whenever data
is updated in the wizard. This happens when the `,e.jsx(n.code,{children:"SET_DATA"}),` redux
action is reduces, but is not something you need to pay attention to. As
long as you build your wizard using the provided logic, it will
happen automagically.`]}),`
`,e.jsx(n.h2,{id:"referring-to-the-computed-properties",children:"Referring to the computed properties"}),`
`,e.jsxs(n.p,{children:[`When referring to the computed properties, prefix the computed property
name with `,e.jsx(n.code,{children:"$computed."})," So if you have a computed prop called ",e.jsx(n.code,{children:"oldEnough"})," you refer to it using ",e.jsx(n.code,{children:"$computed.oldEnough"}),". Like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "type": "Branch",
  "branches": [
    {
      "test": { "operator": "is", "field": "$computed.oldEnough" },
      "children": [
        //...
      ]
    }
    //...
  ]
}
`})})]})}function w(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{w as default};
