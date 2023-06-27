import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

import { MainButton } from "losen/primitives/Button";
import { getData } from "losen/utils/get-data";
import { State } from "losen";

type Props = {
  data?: any
}

function ExportData({ data }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // polyfill for .remove()
    if (!Element.prototype.remove) {
      Element.prototype.remove = function remove() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }
  }, [])

  // copy json result from forms to clipboard
  const copyToClipboard = () => {
    // create a temporary (and hidden) element for text selection
    const temp = document.createElement("textarea");
    const text = document.createTextNode(
      JSON.stringify(data, null, 2)
    );
    temp.appendChild(text);
    document.body.appendChild(temp);

    // select textarea to enable copying
    temp.focus();
    temp.select();

    // copy json
    try {
      document.execCommand("copy");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn("Could not copy to clipboard", err);
    }

    // clean up · remove temporary element
    temp.remove();

    // let user know that json is copied, for some time
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 5000);
  };

  const buttonText = copied
    ? "Svarene er lagret på utklippstavlen!"
    : "Kopier svarene til et fagsystem";

  return (
    <div>
      <MainButton
        aria-live={copied ? "assertive" : undefined}
        copied={copied}
        onClick={copyToClipboard}
      >
        {buttonText}
      </MainButton>
    </div>
  );
}

const mapStateToProps = (state: State, { exporter }: { exporter: (data: any) => string }) => ({
  data: exporter(getData(state)),
});

export default connect(mapStateToProps)(ExportData);
