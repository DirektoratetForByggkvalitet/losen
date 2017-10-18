import PropTypes from 'prop-types';
import React from 'react';

import { Table } from '../primitives/Table';
import { H3 } from '../primitives/Heading';
import TableContainer from '../primitives/TableContainer';
/* eslint-disable react/no-array-index-key */
export default function ApprovalAreas({ areas, title }) {
  if (areas === undefined || areas.length === 0) {
    return null;
  }
  let heading;
  if (title) {
    heading = <H3>Sentrale godkjenninger</H3>;
  }
  return (
    <div>
      {heading}
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>FUNKSJON</th>
              <th>FAGOMRÅDE</th>
              <th>TILTAKSKLASSE</th>
            </tr>
          </thead>
          <tbody>
            {areas.map((area, rowKey) => (
              <tr key={rowKey}>
                <td>{area.function}</td>
                <td>{area.subject_area}</td>
                <td>{area.grade}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

ApprovalAreas.propTypes = {
  areas: PropTypes.array.isRequired,
  title: PropTypes.bool,
};

ApprovalAreas.defaultProps = {
  title: false,
};
