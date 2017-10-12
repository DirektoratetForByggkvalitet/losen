import React from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash.pick';

import Html from '../helper/Html';
import TableContainer from '../../primitives/TableContainer';
import { TD } from '../../primitives/Table';

function TableHeader(props) {
  return <th {...props} />;
}

function TableCell(props) {
  return <TD {...props} inactive={props.inactive} />;
}

TableCell.propTypes = {
  inactive: PropTypes.bool.isRequired,
};

/* eslint-disable react/no-array-index-key */
export default function Table({ debug, cells }) {
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
  debug: PropTypes.bool,
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

Table.defaultProps = {
  debug: false,
};
