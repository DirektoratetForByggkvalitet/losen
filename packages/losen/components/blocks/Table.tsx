import React from 'react';
import { pick } from 'lodash';
import Html from 'components/helper/Html';
import { TD } from 'primitives/Table';
import TableContainer from 'primitives/TableContainer';
import { RenderWithData } from 'index';

type CellProps = Pick<RenderWithData<"Cell" | "Heading">, "colSpan" | "rowSpan"> & {
  simple?: boolean
  'data-inactive': boolean
  children?: any
}

function TableCell(props: CellProps) {
  return <TD {...props} />;
}

function TableHeader({ simple, ...props }: CellProps) {
  return <th {...props} />;
}

/* eslint-disable react/no-array-index-key */
export default function Table({ cells, debug, simple }: RenderWithData<'Table'>) {
  return (
    <TableContainer simple={simple}>
      <table data-debug={debug}>
        <tbody>
          {cells.map((row, rowKey) => (
            <tr key={rowKey}>
              {row.map((cell, cellKey) => {
                const cellProps = {
                  ...pick(cell, ['colSpan', 'rowSpan']),
                  'data-inactive': Boolean(cell.inactive),
                };

                const Cell = cell.type === 'Heading' ? TableHeader : TableCell;

                return (
                  <Cell data-id={cell.id} {...cellProps} key={cellKey} simple={simple} aria-label={cellProps['data-inactive'] ? `Inaktiv: ${cell.text}` : undefined}>
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