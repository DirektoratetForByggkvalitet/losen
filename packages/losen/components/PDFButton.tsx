import React, { useState } from 'react';

import Spinner from 'primitives/Spinner';
import createPDF from 'utils/create-pdf';
import { MainButton } from 'primitives/Button';
import { trackEvent } from 'utils/tracking';

type Props = {
  pdfServiceUrl: string,
  localStorageKey: string,
  pageHeading?: string,
}

export default function PDFButton({
  localStorageKey,
  pageHeading,
  pdfServiceUrl,
}: Props) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleClick = () => {
    if (isDownloading) { return; }

    setIsDownloading(true);
    setErrorMessage(false);

    trackEvent('Last ned PDF', pageHeading);

    createPDF(pdfServiceUrl, localStorageKey)
      .then(() => { setErrorMessage(false); })
      .catch(() => { setErrorMessage(true) })
      .finally(() => { setIsDownloading(false); })
  }

  return (
    <div>
      <MainButton
        type="button"
        onClick={handleClick}
        disabled={isDownloading}
      >
        <span key="text">{isDownloading ? 'Lager PDF...' : 'Lagre som PDF'}</span>
        <Spinner key="spinner" hidden={!isDownloading} />
      </MainButton>

      {errorMessage && <p>Noe gikk galt. Prøv igjen.</p>}
    </div>
  );
}