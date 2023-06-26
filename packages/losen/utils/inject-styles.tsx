import React, { forwardRef, useContext } from "react";
import { StyleContext } from "../components/StyleProvider";

const injectStyles = <P extends {}>(WrappedComponent: React.FC<P>) => forwardRef((props: P, ref) => {
  const styles = useContext(StyleContext);

  return (
    <WrappedComponent
      {...props}
      ref={ref}
      styles={styles}
    />
  );
});

export default injectStyles