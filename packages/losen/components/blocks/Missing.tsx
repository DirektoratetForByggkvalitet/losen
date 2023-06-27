import React from 'react';

export default function Missing({
  type = "No type"
}: { type: string }) {
  return <div>Block missing: {type}</div>;
}