import invariant from 'invariant';
import { NAME as STATE_NAME } from './state';

export default function invariantWizardContext(context) {
  invariant(
    context[STATE_NAME],
    `[Wizard Framework] Could not find required \`${STATE_NAME}\` object.
    Redux <Provider> needs to exist in the component ancestry with the wizard framework stores provided.`,
  );
}
