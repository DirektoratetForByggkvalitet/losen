import React from 'react';
import { RenderWithData } from '../../..';

export default function SelectOption({ id, value, heading, debug }: RenderWithData<"Answer">) {
  return (
    <option value={value}>
      {heading}{debug ? ` (${id})` : null}
    </option>
  );
}