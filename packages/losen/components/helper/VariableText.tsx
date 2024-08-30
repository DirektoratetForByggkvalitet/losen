import React from 'react';

type Props = {
  text?: string
  data?: object
}

/**
 * Takes a string and returns a function that takes an object with properties
 * that should replace the variables in the string. The variables should be
 * wrapped in ${}.
 *
 * Example: Hello ${name}, how are you this fine ${day}? would be turned into
 * a function that takes an object like { name: 'John', day: 'morning' } and
 * returns "Hello John, how are you this fine morning?"
 */
export function template(text: string) {
  return function (variables: Record<string, any>) {
    return text.replace(/\$\{([^}]+)\}/g, (match, name) => variables[name] || match);
  };
}

export default function VariableText({ data = {}, text = "" }: Props) {
  if (!text) {
    return null;
  }

  const compiled = template(text);

  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: compiled(data) }} />;
}