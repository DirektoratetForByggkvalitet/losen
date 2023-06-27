import { ChangeEventHandler } from 'react';

import Html from '../helper/Html';
import { Textarea as StyledTextarea } from 'losen/primitives/Input';
import ErrorIcon from '../graphics/ErrorIcon';
import Information from 'losen/primitives/Information';
import { RenderWithData } from 'losen';

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