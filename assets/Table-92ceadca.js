import{i as o,s as i}from"./inject-styles-aae5f119.js";const n=o(i.table`
  width: 100%;
  font-size: 14px;
  border: 1px solid ${({$styles:t})=>t.color2.secondary};
  border-collapse: collapse;
  text-align: left;
  th,
  td {
    border: 1px solid ${({$styles:t})=>t.color2.secondary};
    padding: 10px;
  }
  th > *,
  td > * {
    vertical-align: middle;
    margin: 0;
    line-height: 1.3;
  }
  @media print {
    font-size: 12px;
    width: auto;
    th,
    td {
      padding: 5px 10px;
    }
    th > *,
    td > * {
      line-height: 1.2;
    }
  }
`),l=o(i.td`
  ${({$styles:t,$simple:e,"data-inactive":a})=>a?`
    background: ${t.color2.errorXLight};
    font-weight: normal;
    position: relative;
    text-decoration: line-through;
`:`
    font-weight: ${e?"normal":"bold"};
    background: ${t.color2.positiveXLight};
`}

  ${({$simple:t})=>t?`
    text-align: left;
    vertical-align: top;
    font-weight: normal;
    line-height: 1.5;
    p {
      font-weight: normal !important;
      margin-top: 3px !important;
    }
    strong {
      font-weight: bold;
    }
    em {
      font-weight: normal;
    }
    @media (max-width: 700px) {
      word-wrap: break-word;
    }
  `:" "}
`);export{n as T,l as a};
