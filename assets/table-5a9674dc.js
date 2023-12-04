import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as r}from"./index-d7a79eca.js";import{T as l}from"./Table-92ceadca.js";import{t as o,s as a,a as p}from"./common-ddf7fa8d.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d3e8958d.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function s(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Building blocks/Table"}),`
`,e.jsx(n.h1,{id:"table",children:"Table"}),`
`,e.jsxs(n.p,{children:[`Sometimes, the need for presenting complex information in the form of a matrix arise.
The `,e.jsx("em",{children:"Table"}),` features a way of visualizing multiple dimensions with dynamic state
that reacts to user wizard input through a dynamic structure and flexible tests to
mark cells as active/inactive.`]}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(l,{children:[o,e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[`The type is required in order to determine what type of node it is. For
a table, this property must be set to `,e.jsx(n.code,{children:"Table"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"id"})}),e.jsx("td",{children:"The id of the table"}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"cells"})}),e.jsxs("td",{children:[e.jsx(n.p,{children:`A two-dimensional array of rows/cols. The cols are table cells with
properties for a cell. The structure looks like this 👇:`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`[
  [
    {
      // Possible types: Heading (th) and Cell (td) - REQUIRED
      "type": "Heading",

      // How many columns this cell spans
      "colspan": 2,

      // How many rows this cell spans
      "rowspan": 2,

      // The text in the cell. HTML is ok - REQUIRED
      "text": "Something interesting<br/>in this cell",

      // DSL expression used to determine if this cell is active
      "test": { "field": "property.to.test", "operator": "gt", "value": 2 }
    },
    {
      // ...
    }
  ],
  [
    // ...
  ]
]
`})})]}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"text"})}),e.jsx("td",{children:e.jsx(n.p,{children:`A lead text for the table. If you need to, you can put HTML in here to
make links etc., but make sure that whatever you insert is valid HTML.`})}),e.jsx("td",{})]}),a,p]})]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "id": "possibleRoles",
  "text": "<p>Firmaet ditt kan ha følgende funksjoner i prosjektet:</p>",
  "type": "Table",
  "cells": [
    [
      {
        "id": "possibleRoles.function",
        "type": "Heading",
        "rowSpan": 2,
        "text": "FUNKSJON"
      },
      {
        "id": "possibleRoles.class",
        "type": "Heading",
        "colSpan": 3,
        "text": "TILTAKSKLASSE"
      }
    ],
    [
      {
        "id": "possibleRoles.class.1",
        "type": "Heading",
        "text": "Tiltaksklasse 1"
      },
      {
        "id": "possibleRoles.class.2",
        "type": "Heading",
        "text": "Tiltaksklasse 2"
      },
      {
        "id": "possibleRoles.class.3",
        "type": "Heading",
        "text": "Tiltaksklasse 3"
      }
    ],
    [
      {
        "id": "possibleRoles.applicant",
        "type": "Heading",
        "text": "Ansvarlig søker"
      },
      {
        "id": "possibleRoles.table.1+applicant",
        "type": "Cell",
        "rowSpan": 2,
        "text": "Mesterbrev/fagskole<br/>+ 4 års erfaring",
        "test": {
          "type": "and",
          "clauses": [
            {
              "field": "competence.education",
              "operator": "gte",
              "value": 2
            },
            {
              "field": "competence.experience",
              "operator": "gte",
              "value": 4
            }
          ]
        }
      },
      {
        "id": "possibleRoles.table.2+applicant",
        "type": "Cell",
        "text": "Mesterbrev/fagskole<br/>+ 6 års erfaring",
        "test": {
          "type": "and",
          "clauses": [
            {
              "field": "competence.education",
              "operator": "gte",
              "value": 2
            },
            {
              "field": "competence.experience",
              "operator": "gte",
              "value": 6
            }
          ]
        }
      },
      {
        "id": "possibleRoles.table.3+applicant",
        "type": "Cell",
        "rowSpan": 2,
        "text": "Universitetsnivå<br/>+ 8 års erfaring",
        "test": {
          "type": "and",
          "clauses": [
            {
              "field": "competence.education",
              "operator": "eq",
              "value": 4
            },
            {
              "field": "competence.experience",
              "operator": "gte",
              "value": 8
            }
          ]
        }
      }
    ],
    [
      {
        "id": "possibleRoles.table.projecting",
        "type": "Heading",
        "text": "Prosjekterende"
      },
      {
        "id": "possibleRoles.table.1+projecting",
        "type": "Cell",
        "text": "Høgskolenivå<br/>+ 6 års erfaring",
        "test": {
          "type": "and",
          "clauses": [
            {
              "field": "competence.education",
              "operator": "gte",
              "value": 3
            },
            {
              "field": "competence.experience",
              "operator": "gte",
              "value": 6
            }
          ]
        }
      }
    ],
    [
      {
        "id": "possibleRoles.table.performing",
        "type": "Heading",
        "text": "Utførende"
      },
      {
        "id": "possibleRoles.table.1+performing",
        "type": "Cell",
        "text": "Fag-/svenneprøve<br/>+ 2 års erfaring",
        "test": {
          "type": "and",
          "clauses": [
            {
              "field": "competence.education",
              "operator": "gte",
              "value": 1
            },
            {
              "field": "competence.experience",
              "operator": "gte",
              "value": 2
            }
          ]
        }
      },
      {
        "id": "possibleRoles.table.2+performing",
        "type": "Cell",
        "text": "Mestebrev-/fagskole<br/>+ 3 års erfaring",
        "test": {
          "type": "and",
          "clauses": [
            {
              "field": "competence.education",
              "operator": "gte",
              "value": 2
            },
            {
              "field": "competence.experience",
              "operator": "gte",
              "value": 3
            }
          ]
        }
      },
      {
        "id": "possibleRoles.table.3+performing",
        "type": "Cell",
        "text": "Høgskolenivå<br/>+ 5 års erfaring",
        "test": {
          "type": "and",
          "clauses": [
            {
              "field": "competence.education",
              "operator": "gte",
              "value": 3
            },
            {
              "field": "competence.experience",
              "operator": "gte",
              "value": 5
            }
          ]
        }
      }
    ]
  ]
}
`})})]})}function w(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(s,t)})):s(t)}export{w as default};
