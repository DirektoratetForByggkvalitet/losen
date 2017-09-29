import React from 'react';
import PropTypes from 'prop-types';

export default function ApprovalAreas({ areas }) {
  if (areas === undefined || areas.length === 0) {
    return null;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>FUNKSJON</th>
          <th>FAGOMRÅDE</th>
          <th>TILTAKSKLASSE</th>
        </tr>
      </thead>
      <tbody>
        {areas.map(area => (
          <tr key={area.function}>
            <td>{area.function}</td>
            <td>{area.subject_area}</td>
            <td>{area.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ApprovalAreas.propTypes = {
  areas: PropTypes.array.isRequired,
};
