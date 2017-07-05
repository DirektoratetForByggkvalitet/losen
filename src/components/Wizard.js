import React from "react";
import Page from "./Page";

export default function Wizard({ schema }) {
  return (
    <div>
      {schema.map(item => {
        return <Page title="Page" children={item["children"]} />;
      })}
    </div>
  );
}
