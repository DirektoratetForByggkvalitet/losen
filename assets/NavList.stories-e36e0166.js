import{j as e}from"./jsx-runtime-ffb262ed.js";import{c as o}from"./Export-86c54c63.js";import{N as f}from"./NavItem-4688f264.js";import"./Block-31a42f1a.js";import"./Button-1f9ca501.js";import"./Errors-7cffc578.js";import"./Heading-bf04477a.js";import"./Paragraphs-7677d7ee.js";import"./Input-3006471d.js";import"./Label-56f51c47.js";import"./Title-8a37e491.js";import"./ToggleButton-24fd0fd2.js";import"./Wizard-2ae16d02.js";import{C as x}from"./CheckIcon-b929c785.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function a({active:r=!1,done:n=!1,errors:l=!1,heading:m="TITLE MISSING",id:p,index:u,setPage:c}){return e.jsxs(f,{$active:r,$done:n,$errors:l,href:"#",onClick:g=>{g.preventDefault(),c(p)},children:[e.jsx("span",{children:u}),e.jsx("p",{children:m}),n&&!r&&e.jsx(x,{})]})}try{a.displayName="NavItem",a.__docgenInfo={description:"",displayName:"NavItem",props:{active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},done:{defaultValue:{value:"false"},description:"",name:"done",required:!1,type:{name:"boolean"}},errors:{defaultValue:{value:"false"},description:"",name:"errors",required:!1,type:{name:"boolean"}},heading:{defaultValue:{value:"TITLE MISSING"},description:"",name:"heading",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},setPage:{defaultValue:null,description:"",name:"setPage",required:!0,type:{name:"(page: string, property?: string | undefined) => void"}}}}}catch{}const D={component:o},i={render:()=>e.jsxs(o,{children:[e.jsx("li",{children:e.jsx(a,{id:"1",index:1,heading:"Page",setPage:()=>{},done:!0},1)}),e.jsx("li",{children:e.jsx(a,{id:"2",index:2,heading:"Page",setPage:()=>{},active:!0},2)}),e.jsx("li",{children:e.jsx(a,{id:"3",index:3,heading:"Page",setPage:()=>{}},3)}),e.jsx("li",{children:e.jsx(a,{id:"4",index:4,heading:"Page",setPage:()=>{}},4)})]})};var t,d,s;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <NavList>
    <li>
      <NavItem key={1} id="1" index={1} heading="Page" setPage={() => {}} done />
    </li>
    <li>
      <NavItem key={2} id="2" index={2} heading="Page" setPage={() => {}} active />
    </li>
    <li>
      <NavItem key={3} id="3" index={3} heading="Page" setPage={() => {}} />
    </li>
    <li>
      <NavItem key={4} id="4" index={4} heading="Page" setPage={() => {}} />
    </li>
  </NavList>
}`,...(s=(d=i.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const G=["Default"];export{i as Default,G as __namedExportsOrder,D as default};
