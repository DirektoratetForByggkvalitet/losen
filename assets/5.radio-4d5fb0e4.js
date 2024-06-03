import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as s}from"./index-1dbb4c1e.js";import{T as a}from"./Table-92ceadca.js";import{t as d,i as o,c as l}from"./common-ddf7fa8d.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-664b5535.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function r(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Building blocks/Radio"}),`
`,e.jsx(t.h1,{id:"radio",children:"Radio"}),`
`,e.jsx(t.p,{children:"A group of radio buttons. Like Checkbox, but only possible to select one."}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(a,{children:[d,e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsxs(t.p,{children:[`The type is required in order to determine what type of node it is. For
a radio group, this property must be set to `,e.jsx(t.code,{children:"Radio"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"id"})}),e.jsx("td",{children:"The id of the radio group"}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"options"})}),e.jsx("td",{children:e.jsxs(t.p,{children:["An array of ",e.jsx(t.a,{href:"?path=?path=/docs/building-blocks-answer--docs",children:e.jsx(t.code,{children:"Answer"})}),`
nodes. Options that the user can select.`]})}),e.jsx("td",{children:"Yes"})]}),o,e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"text"})}),e.jsx("td",{children:"The text to follow the heading for this input field."}),e.jsx("td",{})]}),l,e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"grid"})}),e.jsx("td",{children:"Display options in a three column grid."}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"clear"})}),e.jsx("td",{children:e.jsx(t.p,{children:`Array of properties to clear when the value for this radio input
changes.`})}),e.jsx("td",{})]})]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  "id": "example.cats",
  "property": "example.cats",
  "type": "Radio",
  "heading": "Hvilken av disse kattene foretrekker du?",
  "text": "<a href=\\"//no.wikipedia.org/wiki/Kattefamilien\\" target=\\"_blank\\">Les mer om katter</a>",
  "clear": ["example.costumes", "example.vehicle"],
  "options": [
    {
      "id": "katt1",
      "type": "Answer",
      "heading": "Kjempesøt 👶-katt",
      "text": "Denne katten er så liten at du kan ha den i lomma. Den er også kjempesøt og kjempeuskyldig. Det kan hende den bæsjer i senga di. Ingen vet hvor stor den blir, eller om den noensinne blir voksen.",
      "image": {
        "url": "//i.pinimg.com/736x/ba/03/23/ba03237a6d6499f0e2633314826e1526--cutest-animals-baby-animals.jpg",
        "alt": "alt for image"
      },
      "value": "katt1"
    },
    {
      "id": "katt2",
      "type": "Answer",
      "heading": "🌭-katt",
      "text": "Dette er en veldig sjelden katt. Bare 1 av 8000 katter er pølsekatter. De krever ekstra mye kos og omsorg fordi de blir tvunget til å ha på seg den teite drakta. Det er en stor forpliktelse å få en slik katt.",
      "image": {
        "url": "//i.pinimg.com/736x/ae/51/9e/ae519e2800991519b1041a539747e0d4--food-costumes-costume-ideas.jpg",
        "alt": "alt for image"
      },
      "value": "katt2"
    },
    {
      "id": "katt3",
      "type": "Answer",
      "heading": "Veldig 🤓 katt",
      "text": "Denne katten står bak hele denne veiviseren. Det er den smarteste katten i verden. Neida, vi bare tuller, katter kan jo ikke lage nettsider. Ennå, iallfall.",
      "image": {
        "url": "//lorempixel.com/156/156/cats",
        "alt": "alt for image"
      },
      "value": "katt3"
    }
  ]
}
`})})]})}function A(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{A as default};
