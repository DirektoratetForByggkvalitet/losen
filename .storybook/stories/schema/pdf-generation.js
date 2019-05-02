import React from 'react';

import { H1, H2, H3 } from '../../../src/web/primitives/Heading';

export default function DataExport() {
  return (
    <div>
      <H1>PDF generation</H1>
      <p>
        Since browsers aren't good or reliable when it comes to printing and saving to PDF format
        losen integrates with a ready made <a href="https://github.com/DirektoratetForByggkvalitet/losen-pdf">
        companion service</a> for building PDFs.
      </p>
      <p>
        You can deploy this app to the serverless function service by Zeit called `now` – it runs
        on top of amazon lambda. To deploy the app you need to clone the repo and follow the deploy
        instructions in the readme.
      </p>

      <H2>How it works</H2>
      <p>
        In order to print the result page, the wizard grab the localstorage data stored for the 
        wizard and the current url and sends it to the PDF service. The PDF service then opens up 
        the url sent to it, loads the localstorage data into the browser (Chrome) and print the page.
        The PDF is then returned and the file is downloaded.
      </p>

      <H2>Telling the wizard where the PDF service is</H2>
      <p>
        The wizard need to know two things in order to make PDFs: the localstorage holding the state
        data and the url to the PDF service. This is set in the `meta` section of the schema JSON file.
        Like this:
      </p>
      <pre>{`{
  "meta": {
    ...
    "pdfServiceUrl": "https://pdf.dibk.kunde.netlife.com/pdf",
    "localStorageKey": "reduxPersist:@WIZARD_STATE"
  },
  ...
`}</pre>

      <H2>Prerequisites</H2>
      <ol>
        <li>The wizard must be publicly available over the internet (no localhost)</li>
        <li>The wizard must use the `redux-persist` plugin or similar, storing the data in localstorage</li>
        <li>The url to the the wizard must be on the list of allowed hosts for the PDF service (see the dibk-pdf README for explanation)</li>
      </ol>
    </div>
  )
}
