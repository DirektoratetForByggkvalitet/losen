import React from 'react';
import get from "lodash/get";
import { connect } from "react-redux";
import { NAME } from "losen/state";

import { Value as StyledValue } from "losen/primitives/Summary";
import { RenderableNode, State } from "../../..";
import { isOfType } from "../../../utils/is-of-type";

function hasAllValues(values: Array<string | number>, data: State) {
  return values.reduce(
    (acc, currentValue) => get(data, currentValue) !== undefined && acc,
    true
  );
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

  const sum = values.reduce<number>((accumulator, currentValue, currentIndex) => {
    if (operations && operations[currentIndex] === "-") {
      return Math.max(accumulator - get(data, currentValue), minimum!);
    } else if (operations && operations[currentIndex] === "*") {
      return Math.max(accumulator * get(data, currentValue), minimum!);
    } else if (operations && operations[currentIndex] === "/") {
      return Math.max(accumulator / get(data, currentValue), minimum!);
    }
    return Math.max(accumulator + get(data, currentValue), minimum!);
  }, 0);

  return <StyledValue>{sum}</StyledValue>;
}

const ConnectedSum = connect((state: State) => ({
  data: state[NAME],
}))(Sum);

export default ConnectedSum;