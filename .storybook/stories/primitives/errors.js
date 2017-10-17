import React from 'react';
import { H1, H2 } from '../../../src/web/primitives/Heading';
import { ErrorMessage } from '../../../src/web/primitives/Errors';
import Information from '../../../src/web/primitives/Information';
import { SpecificBlock, TextBlock } from '../../../src/web/primitives/Block';
import StyledErrorBlock from '../../../src/web/primitives/ErrorBlock';

export default function PrimitivesIntro() {
  return (<div>
    <H1>Errors and warnings</H1>
    <H2>Validation error</H2>
    <div>
        <ErrorMessage>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 38 38"
            >
              <g>
                <circle style={{ fill: "red" }} cx="19" cy="19" r="16" />
                <path
                  style={{ fill: "white" }}
                  d="M16.9,25.1c0-0.7,0.2-1.2,0.5-1.5s0.9-0.5,1.5-0.5c0.6,0,1.2,0.2,1.5,0.5s0.5,0.8,0.5,1.5
                    c0,0.6-0.2,1.1-0.5,1.5s-0.9,0.5-1.5,0.5c-0.7,0-1.2-0.2-1.5-0.5S16.9,25.7,16.9,25.1z M20.4,21.1h-2.9L17,9.6H21L20.4,21.1z"
                />
              </g>
            </svg> 
            You did something very wrong
        </ErrorMessage>
    </div>
    <hr />

    <H2>Information notice</H2>
    <div>
        <Information>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 38 38"
            >
              <g>
                <circle style={{ fill: "black" }} cx="19" cy="19" r="16" />
                <path
                  style={{ fill: "white" }}
                  d="M16.9,25.1c0-0.7,0.2-1.2,0.5-1.5s0.9-0.5,1.5-0.5c0.6,0,1.2,0.2,1.5,0.5s0.5,0.8,0.5,1.5
                    c0,0.6-0.2,1.1-0.5,1.5s-0.9,0.5-1.5,0.5c-0.7,0-1.2-0.2-1.5-0.5S16.9,25.7,16.9,25.1z M20.4,21.1h-2.9L17,9.6H21L20.4,21.1z"
                />
              </g>
            </svg> 
            This is important information, remember this!
          </Information>
    </div>
    <hr />

    <H2>Error block</H2>
    <StyledErrorBlock>
      <SpecificBlock groupedSimple>
        <H2>This is an error block</H2>
      </SpecificBlock>
      <SpecificBlock grouped groupedSimple>
        <p>No point in continuing with the guide once you see one of these, unfortunately.</p>
      </SpecificBlock>
    </StyledErrorBlock>
    <hr />
  </div>);
}
