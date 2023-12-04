import React, { forwardRef, useContext } from "react";
import { StyleContext } from "../components/StyleProvider";
import { IStyledComponent, Runtime } from "styled-components";

const injectStyles = <R extends Runtime, P extends object>(WrappedComponent: IStyledComponent<R, P>) => forwardRef((props: Omit<P, '$styles'>, ref) => {
  const styles = useContext(StyleContext);

  return (
    <WrappedComponent
      {...props as P}
      ref={ref}
      $styles={styles}
    />
  );
});

export default injectStyles