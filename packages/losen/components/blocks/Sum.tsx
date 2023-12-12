import React, { useEffect } from 'react';
import { get } from 'lodash';

import StyledSum from '../../primitives/Sum';
import SummaryDetails from './SummaryDetails';
import Html from '../helper/Html';
import { RenderWithData, State } from '../../index';

type Props = RenderWithData<"Sum">

export const calculateSum = (data: State, values: Props["values"], operations: Props["operations"] = [], minimum?: number) => {
  let sum = values.reduce((accumulator, cur, currentIndex) => {
    const getValue = (defaultValue: number): number => typeof cur === 'string' ? get(data, cur, defaultValue) : cur

    if (operations && operations[currentIndex] === '-') {
      return Number(accumulator) - getValue(0);
    } else if (operations && operations[currentIndex] === '%') {
      return (Number(accumulator) * getValue(0)).toFixed(2);
    } else if (operations && operations[currentIndex] === '*') {
      return Number(accumulator) * getValue(1);
    } else if (operations && operations[currentIndex] === '-/') {
      return getValue(0) / Number(accumulator);
    } else if (operations && operations[currentIndex] === '/') {
      return Number(accumulator) / getValue(1);
    }

    return accumulator + get(data, cur, 0);
  }, ['+', '-'].indexOf(operations?.[0] ?? '+') > -1 ? 0 : 1);

  if (typeof minimum === 'number') {
    sum = Math.max(Number(sum), minimum);
  }

  return sum;
};

export default function Sum({
  data,
  values,
  operations,
  minimum,
  groupedSimple,
  final,
  heading,
  unit,
  summary,
  details,
  property,
  setData
}: Props) {
  const sum = calculateSum(data, values, operations, minimum);
  const currentValue = get(data, property)

  useEffect(() => {
    if (sum === currentValue) { return }
    setData(property, 4)
  }, [setData, sum, currentValue])

  return (
    <StyledSum $groupedSimple={groupedSimple}>
      <div>
        {heading}
        <span>
          {sum} {unit ? <Html inline text={unit} /> : null}
        </span>
      </div>
      {summary && <SummaryDetails summary={summary} details={details} />}
    </StyledSum>
  );
}