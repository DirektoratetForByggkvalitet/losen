import React from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash.pick';

import Html from '../helper/Html';

function TableHeader(props) {
  return <th {...props} />;
}

function TableCell(props) {
  return <td {...props} style={{ backgroundColor: props.inactive ? 'lightpink' : 'lightblue' }} />;
}

TableCell.propTypes = {
  inactive: PropTypes.bool.isRequired,
};

/* eslint-disable react/no-array-index-key */
export default function Table({ cells }) {
  return (
    <table>
      <tbody>
        {cells.map((row, rowKey) => (
          <tr key={rowKey}>
            {row.map((cell, cellKey) => {
              const cellProps = pick(cell, ['colSpan', 'rowSpan', 'inactive']);
              const Cell = cell.type === 'Heading' ? TableHeader : TableCell;

              return (
                <Cell {...cellProps} key={cellKey}>
                  <Html text={cell.text} />
                </Cell>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  cells: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(['Heading', 'Cell']).isRequired,
        text: PropTypes.string.isRequired,
        colSpan: PropTypes.number,
        rowSpan: PropTypes.number,
      }),
    ),
  ).isRequired,
};
