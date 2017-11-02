import PropTypes from 'prop-types';
import React from 'react';

import Summary from './Summary';

import { H1 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import { SpecificBlock } from '../primitives/Block';
import Html from './helper/Html';
import Main from '../primitives/grid/Main';

export default function ErrorResult({
  errorPages,
  schema,
  setPage,
  title,
  errorheading,
  errorlead,
}) {
  return (
    <Main result>
      <H1>{errorheading}</H1>
      <Lead result>
        <Html text={errorlead} />
      </Lead>
      <SpecificBlock>
        <H1 small>{title}</H1>
        <Summary errorPages={errorPages} setPage={setPage} pages={schema} />
      </SpecificBlock>
    </Main>
  );
}

ErrorResult.defaultProps = {
  errorheading: '',
  errorlead: '',
  schema: [],
  title: '',
};

ErrorResult.propTypes = {
  errorheading: PropTypes.string,
  errorlead: PropTypes.string,
  errorPages: PropTypes.array.isRequired,
  schema: PropTypes.arrayOf(PropTypes.object),
  setPage: PropTypes.func.isRequired,
  title: PropTypes.string,
};
