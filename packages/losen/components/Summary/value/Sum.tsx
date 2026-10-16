import React from 'react';
import { get } from 'lodash';
import { connect } from "react-redux";
import { NAME } from "../../../state";

import { Value as StyledValue } from "../../../primitives/Summary";
import { RenderableNode, State } from "../../../index";
import { isOfType } from "../../../utils/is-of-type";
import { calculateSum } from "../../blocks/Sum";
import { formatNumber } from "../../../utils/format-number";

// Only field references need an answer; numeric constants are always present
export function hasAllValues(values: Array<string | number>, data: State) {
  return values
    .filter((value): value is string => typeof value === 'string')
    .every((field) => get(data, field) !== undefined);
}

type Props = {
  node: RenderableNode
  data: State
}

function Sum({ node, data }: Props) {
  if (!isOfType(node, ["Sum"])) {
    return null
  }

  const { minimum, operations, values } = node;

  if (!hasAllValues(values, data)) {
    return <StyledValue missing>* Mangler verdi for utregning</StyledValue>;
  }

  const sum = calculateSum(data, values, operations, minimum);

  return <StyledValue>{formatNumber(sum)}</StyledValue>;
}

const ConnectedSum = connect((state: State) => ({
  data: state[NAME],
}))(Sum);

export default ConnectedSum;