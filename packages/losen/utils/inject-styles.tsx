import React, { forwardRef, useContext } from "react";
import { StyleContext } from "../components/StyleProvider";
import { IStyledComponent, Runtime } from "styled-components";

const injectStyles = <R extends Runtime, P extends object>(WrappedComponent: IStyledComponent<R, P>) => forwardRef<unknown, Omit<P, '$styles'>>((props, ref) => {
  const styles = useContext(StyleContext);
  const Component = WrappedComponent as React.ElementType;

  return (
    <Component
      {...props}
      ref={ref}
      $styles={styles}
    />
  );
});

export default injectStyles
