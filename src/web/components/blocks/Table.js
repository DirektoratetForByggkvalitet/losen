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

export default function Table({ cells }) {
  return (
    <table>
      {cells.map(row => (
        <tr>
          {row.map((cell) => {
            const cellProps = pick(cell, ['colSpan', 'rowSpan', 'inactive']);
            const Cell = cell.type === 'Heading' ? TableHeader : TableCell;

            return <Cell {...cellProps}><Html text={cell.text} /></Cell>;
          })}
        </tr>
      ))}
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
