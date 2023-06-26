import React from "react";
import template from "lodash/template";

type Props = {
  text?: string
  data?: object
}

export default function VariableText({ data = {}, text = "" }: Props) {
  if (!text) {
    return null;
  }
  const compiled = template(text);

  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: compiled(data) }} />;
}