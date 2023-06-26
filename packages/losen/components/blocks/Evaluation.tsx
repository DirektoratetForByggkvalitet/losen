import React from 'react';
import get from 'lodash/get';

import StyledSum from 'losen/primitives/Sum';
import StyledSumResult from 'losen/primitives/SumResult';
import Html from '../helper/Html';
import { RenderWithData } from 'losen';

export default function Evaluation({
  data,
  testing,
  final,
  groupedSimple,
  happy,
  sad,
  showValue,
  unit,
}: RenderWithData<"Evaluation">) {
  let testedValue: number = 0;

  if (Array.isArray(testing)) {
    testedValue = get(data, testing[0]) - get(data, testing[1]);
  } else if (testing) {
    testedValue = get(data, testing);
  }

  const absTestedValue = Math.abs(testedValue);
  if (showValue) {
    if (testedValue < 0) {
      return (
        <StyledSum groupedSimple={groupedSimple} final={final}>
          <div>
            {sad}
            <span className="sad">
              {absTestedValue} {unit ? <Html inline text={unit} /> : null}
            </span>
          </div>
        </StyledSum>
      );
    }
    return (
      <StyledSum groupedSimple={groupedSimple} final={final}>
        <div>
          {happy}
          <span className="happy">
            {testedValue} {unit ? <Html inline text={unit} /> : null}
          </span>
        </div>
      </StyledSum>
    );
  }

  if (testedValue < 0) {
    // sad case
    return (
      <StyledSumResult>
        <div className="sad">{sad}</div>
      </StyledSumResult>
    );
  }
  // happy case
  return (
    <StyledSumResult>
      <div className="happy">{happy}</div>
    </StyledSumResult>
  );
}