import React, { createContext } from 'react';
import { merge } from 'lodash';

import defaultStyles, { StylesProps } from '../styles';

export const StyleContext = createContext<typeof defaultStyles>(defaultStyles);

type Props = {
  children: React.ReactNode;
  styles?: StylesProps['styles'];
}

export function StyleProvider({ children, styles = {} }: Props) {
  return <StyleContext.Provider value={merge({}, defaultStyles, styles)}>
    <div>{children}</div>
  </StyleContext.Provider>;
}
