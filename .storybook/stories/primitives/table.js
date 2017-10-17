import React from 'react';
import { H1, H2 } from '../../../src/web/primitives/Heading';
import { Table } from '../../../src/web/primitives/Table';

export default function PrimitivesIntro() {
  return (<div>
    <H1>Table</H1>
    <H2>Default table</H2>
    <Table>
      <tr>
        <th>Table header</th>
        <th>Table header</th>
        <th>Table header</th>
      </tr>
      <tr>
        <td>Table data</td>
        <td>Table data</td>
        <td>Table data</td>
      </tr>
      <tr>
        <td>Table data</td>
        <td>Table data</td>
        <td>Table data</td>
      </tr>
    </Table>
    <hr />
  </div>);
}
