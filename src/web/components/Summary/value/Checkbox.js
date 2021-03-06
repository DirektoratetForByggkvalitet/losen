import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { NAME } from '../../../state';

import { SpecificBlock } from '../../../primitives/Block';
import { CheckboxResultDisplay as Checkbox } from '../../../primitives/Input';
import { Label } from '../../../primitives/Label';

function numOfMatchingItemsInObject(object, value) {
  const items = Object.keys(object || {}).filter(key => object[key] === value);
  return items.length;
}

function Sum({ node, node: { allMandatory, currentValue = {}, errors } }) {
  const matchingItems = numOfMatchingItemsInObject(currentValue, true);

  return (
    <div>
      <SpecificBlock grouped smallMarginTop error={allMandatory && errors.required}>
        <p>
          {matchingItems === 0 && <strong>Du har ikke valgt noen alternativer, men for </strong>}
          {matchingItems > 0 && (
            <strong>
              Du har {allMandatory && errors.required ? 'kun' : ''} valgt {numOfMatchingItemsInObject(currentValue, true)}
              {' av '} {node.options.length} alternativer.
            </strong>
          )}
        </p>

        {node.options.map(item => (
          <div key={`${node.id}-${item.value}`}>
            <Checkbox
              type="checkbox"
              id={`${node.id}-${item.value}`}
              checked={currentValue[item.value] || false}
              readOnly
            />
            <Label for={`${node.id}-${item.value}`}>
              <div>{item.heading}</div>
            </Label>
          </div>
        ))}
      </SpecificBlock>
    </div>
  );
}

const ConnectedSum = connect(state => ({
  data: state[NAME],
}))(Sum);

export default ConnectedSum;

Sum.propTypes = {
  node: PropTypes.object.isRequired,
};
