import PropTypes from 'prop-types';
import React from 'react';

import Summary from './Summary';

import { H1 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import { SpecificBlock } from '../primitives/Block';
import Html from './helper/Html';
import Main from '../primitives/grid/Main';

export default function ErrorResult({
  errorheading,
  errorlead,
  errorPages,
  schema,
  setPage,
  summaryTitle,
  title,
}) {
  return (
    <Main result>
      <H1>{errorheading}</H1>
      <Lead result>
        <Html text={errorlead} />
      </Lead>
      <SpecificBlock>
        {summaryTitle ? <H1 small>{summaryTitle}</H1> : <H1 small>{title}</H1>}
        <Summary errorPages={errorPages} setPage={setPage} pages={schema} />
      </SpecificBlock>
    </Main>
  );
}

ErrorResult.defaultProps = {
  errorheading: '',
  errorlead: '',
  schema: [],
  summaryTitle: '',
  title: '',
};

ErrorResult.propTypes = {
  errorheading: PropTypes.string,
  errorlead: PropTypes.string,
  errorPages: PropTypes.array.isRequired,
  schema: PropTypes.arrayOf(PropTypes.object),
  setPage: PropTypes.func.isRequired,
  summaryTitle: PropTypes.string,
  title: PropTypes.string,
};
