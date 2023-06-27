import { Table } from "losen/primitives/Table";
import { H3 } from "losen/primitives/Heading";
import TableContainer from "losen/primitives/TableContainer";

type Props = {
  areas?: Array<{ 'function': string, subject_area: string, grade: string }>
  title?: boolean
}

/* eslint-disable react/no-array-index-key */
export default function ApprovalAreas({ areas, title }: Props) {
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
              <th>Funksjon</th>
              <th>Fagområde</th>
              <th>Tiltaksklasse</th>
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