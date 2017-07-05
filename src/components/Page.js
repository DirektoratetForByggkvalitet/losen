import React from "react";
import Block from "./blocks/Block";

export default function Page({ title, children }) {
  return (
    <div>
      <h2>
        {title}
      </h2>
      {children.map(block => {
        return <Block block={block} type={block["@type"]} />;
      })}
    </div>
  );
}
