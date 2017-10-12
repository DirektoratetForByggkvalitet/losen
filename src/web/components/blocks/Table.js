import pick from 'lodash.pick';
import PropTypes from 'prop-types';
import React from 'react';

import Html from '../helper/Html';

import { TD } from '../../primitives/Table';
import TableContainer from '../../primitives/TableContainer';

function TableCell(props) {
  return <TD {...props} inactive={props.inactive} />;
}

function TableHeader(props) {
  return <th {...props} />;
}

TableCell.propTypes = {
  inactive: PropTypes.bool.isRequired,
};

/* eslint-disable react/no-array-index-key */
export default function Table({ cells, debug }) {
  return (
    <TableContainer>
      <table debug={debug}>
        <tbody>
          {cells.map((row, rowKey) => (
            <tr key={rowKey}>
              {row.map((cell, cellKey) => {
                const cellProps = pick(cell, ['colSpan', 'rowSpan', 'inactive']);
                const Cell = cell.type === 'Heading' ? TableHeader : TableCell;

                return (
                  <Cell data-id={cell.id} {...cellProps} key={cellKey}>
                    <Html text={cell.text} />
                  </Cell>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}

Table.propTypes = {
  cells: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        colSpan: PropTypes.number,
        rowSpan: PropTypes.number,
        text: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['Heading', 'Cell']).isRequired,
      }),
    ),
  ).isRequired,
  debug: PropTypes.bool,
};

Table.defaultProps = {
  debug: false,
};
