import React from 'react';
import { H1, H2 } from '../../../src/web/primitives/Heading';
import { SpecificBlock, TextBlock } from '../../../src/web/primitives/Block';
import StyledErrorBlock from '../../../src/web/primitives/ErrorBlock';

export default function PrimitivesIntro() {
  return (<div>
    <H1>Blocks</H1>
    <H2>Default block</H2>
    <SpecificBlock>
      <H2>This is a block</H2>
    </SpecificBlock>
    <hr />

    <H2>Block group</H2>
    <SpecificBlock>
      <H2>Heading</H2>
      <SpecificBlock grouped>
        <H2>This is a grouped block</H2>
        <p>Omnium prompta placerat in sed. Cum no congue tamquam iracundia. Oporteat periculis instructior est in, vis habeo reprimique ei.</p>
      </SpecificBlock>
      <SpecificBlock grouped>
        <H2>This is a grouped block</H2>
        <p>Omnium prompta placerat in sed. Cum no congue tamquam iracundia. Oporteat periculis instructior est in, vis habeo reprimique ei.</p>
      </SpecificBlock>
    </SpecificBlock>
    <hr />

    <H2>Simple block group</H2>
    <SpecificBlock>
      <H2>Heading</H2>
      <SpecificBlock grouped groupedSimple>
        <H2>This is a simple grouped block</H2>
        <p>Omnium prompta placerat in sed. Cum no congue tamquam iracundia. Oporteat periculis instructior est in, vis habeo reprimique ei.</p>
      </SpecificBlock>
      <SpecificBlock grouped groupedSimple>
        <H2>This is a simple grouped block</H2>
        <p>Omnium prompta placerat in sed. Cum no congue tamquam iracundia. Oporteat periculis instructior est in, vis habeo reprimique ei.</p>
      </SpecificBlock>
    </SpecificBlock>
    <hr />

    <H2>Error block</H2>
    <p>An error block is basically a grouped block with custom styling.</p>
    <StyledErrorBlock role="alert">
      <SpecificBlock groupedSimple>
        <H2>This is an error block</H2>
      </SpecificBlock>
      <SpecificBlock grouped groupedSimple>
        <p>No point in continuing with the guide once you see one of these, unfortunately.</p>
      </SpecificBlock>
    </StyledErrorBlock>
    <hr />

    <H2>Text block</H2>
    <TextBlock>
      <H2>This is a text block</H2>
      <p>
        Option facilis delicata nec no. In alii unum adhuc qui, mel an summo ponderum. Eos vero scripta id, vix labitur persecuti eloquentiam ei. Te justo dictas labitur eam. Omnium prompta placerat in sed. Cum no congue tamquam iracundia. Oporteat periculis instructior est in, vis habeo reprimique ei.
      </p>
    </TextBlock>
    <hr />

    <H2>Table block</H2>
    <SpecificBlock type="Table">
      <H2>This is a table block</H2>
      <table>
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
      </table>
    </SpecificBlock>
    <hr />
  </div>);
}
