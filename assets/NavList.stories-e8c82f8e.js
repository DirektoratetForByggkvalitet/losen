import{j as e}from"./jsx-runtime-ffb262ed.js";import{b as o}from"./Export-1a85c2ea.js";import{N as f}from"./NavItem-576341b4.js";import"./Block-4329bee1.js";import"./Button-63163bde.js";import"./Errors-10bf36f5.js";import"./Figure-dde49100.js";import"./Heading-0739380d.js";import"./Paragraphs-f90423ee.js";import"./Input-c4e4fb5f.js";import"./Label-c52a34a1.js";import"./Title-5af228ac.js";import"./ToggleButton-a5ee878d.js";import"./Wizard-d3fe4528.js";import{C as x}from"./CheckIcon-b929c785.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./inject-styles-a5bba7af.js";import"./styles-36622289.js";function a({active:r=!1,done:n=!1,errors:l=!1,heading:m="TITLE MISSING",id:p,index:u,setPage:c}){return e.jsxs(f,{active:r,done:n,errors:l,href:"#",onClick:g=>{g.preventDefault(),c(p)},children:[e.jsx("span",{children:u}),e.jsx("p",{children:m}),n&&!r&&e.jsx(x,{})]})}try{a.displayName="NavItem",a.__docgenInfo={description:"",displayName:"NavItem",props:{active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},done:{defaultValue:{value:"false"},description:"",name:"done",required:!1,type:{name:"boolean"}},errors:{defaultValue:{value:"false"},description:"",name:"errors",required:!1,type:{name:"boolean"}},heading:{defaultValue:{value:"TITLE MISSING"},description:"",name:"heading",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},setPage:{defaultValue:null,description:"",name:"setPage",required:!0,type:{name:"(page: string, property?: string | undefined) => void"}}}}}catch{}const M={component:o},i={render:()=>e.jsxs(o,{children:[e.jsx("li",{children:e.jsx(a,{id:"1",index:1,heading:"Page",setPage:()=>{},done:!0},1)}),e.jsx("li",{children:e.jsx(a,{id:"2",index:2,heading:"Page",setPage:()=>{},active:!0},2)}),e.jsx("li",{children:e.jsx(a,{id:"3",index:3,heading:"Page",setPage:()=>{}},3)}),e.jsx("li",{children:e.jsx(a,{id:"4",index:4,heading:"Page",setPage:()=>{}},4)})]})};var t,d,s;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(s=(d=i.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const O=["Default"];export{i as Default,O as __namedExportsOrder,M as default};
