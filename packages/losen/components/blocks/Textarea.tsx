import React, { ChangeEventHandler } from 'react';

import Html from 'components/helper/Html';
import { Textarea as StyledTextarea } from 'primitives/Input';
import ErrorIcon from 'components/graphics/ErrorIcon';
import Information from 'primitives/Information';
import { RenderWithData } from 'index';

export default function Textarea(props: RenderWithData<"Textarea">) {
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const { property, setData } = props;
    const value = e.target.value;

    setData(property, value);
  };

  const { currentValue, information, heading, placeholder, property, autocomplete } = props;

  return (
    <div>
      <StyledTextarea
        aria-label={heading}
        aria-describedby={information ? `${property}.information` : undefined}
        placeholder={placeholder}
        value={currentValue}
        onChange={handleChange}
        autoComplete={autocomplete}
      />
      {information && (
        <Information id={`${property}.information`}>
          <ErrorIcon triangleFill={'black'} />
          <Html text={information} />
        </Information>
      )}
    </div>
  );
}