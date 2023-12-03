import{i,s as o}from"./inject-styles-a5bba7af.js";const a=i(o.table`
  width: 100%;
  font-size: 14px;
  border: 1px solid ${({styles:t})=>t.color2.secondary};
  border-collapse: collapse;
  text-align: left;
  th,
  td {
    border: 1px solid ${({styles:t})=>t.color2.secondary};
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
`),n=i(o.td`
  ${t=>t["data-inactive"]?`
    background: ${t.styles.color2.errorXLight};
    font-weight: normal;
    position: relative;
    text-decoration: line-through;
`:`
    font-weight: ${t.simple?"normal":"bold"};
    background: ${t.styles.color2.positiveXLight};
`}

  ${t=>t.simple?`
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
`);export{a as T,n as a};
