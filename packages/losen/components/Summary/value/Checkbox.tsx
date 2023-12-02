import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NAME }  from "state";

import { SpecificBlock }  from "primitives/Block";
import { CheckboxResultDisplay as Checkbox }  from "primitives/Input";
import { Label }  from "primitives/Label";
import { State } from "losen";

function numOfMatchingItemsInObject(object: any, value: any) {
  const items = Object.keys(object || {}).filter(
    (key) => object[key] === value
  );
  return items.length;
}

function Sum({ node, node: { allMandatory, currentValue = {}, errors } }: any) {
  const matchingItems = numOfMatchingItemsInObject(currentValue, true);

  return (
    <div>
      <SpecificBlock
        grouped
        error={allMandatory && errors.required}
      >
        <small>
          {matchingItems === 0 && (
            <em>Du har ikke valgt noen alternativer, men for </em>
          )}
          {matchingItems > 0 && (
            <em>
              Du har {allMandatory && errors.required ? "kun" : ""} valgt{" "}
              {numOfMatchingItemsInObject(currentValue, true)}
              {" av "} {node.options.length} alternativer.
            </em>
          )}
        </small>

        {node.options.map((item: any) => (
          <div key={`${node.id}-${item.value}`}>
            <Checkbox
              type="checkbox"
              id={`${node.id}-${item.value}`}
              checked={currentValue[item.value] || false}
              readOnly
            />
            <Label htmlFor={`${node.id}-${item.value}`}>
              <div>{item.heading}</div>
            </Label>
          </div>
        ))}
      </SpecificBlock>
    </div>
  );
}

const ConnectedSum = connect((state: State) => ({
  data: state[NAME],
}))(Sum);

export default ConnectedSum;

Sum.propTypes = {
  node: PropTypes.object.isRequired,
};
