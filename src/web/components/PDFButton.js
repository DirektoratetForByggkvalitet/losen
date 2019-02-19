import React, { Component } from 'react';
import PropTypes from 'prop-types';

import createPDF from '../utils/create-pdf';
import { MainButton } from '../primitives/Button';

export default class PDFButton extends Component {
  static propTypes = {
    pdfServiceUrl: PropTypes.string.isRequired,
    localStorageKey: PropTypes.string.isRequired,
  }

  state = {
    isDownloading: false,
    errorMessage: null,
  };

  handleClick = () => {
    const { pdfServiceUrl, localStorageKey } = this.props;
    const { isDownloading } = this.state;

    if (isDownloading) { return; }

    this.setState({
      isDownloading: true,
      errorMessage: false,
    });

    createPDF(pdfServiceUrl, localStorageKey)
      .then(() => {
        this.setState({
          errorMessage: false,
          isDownloading: false,
        });
      })
      .catch(() => {
        this.setState({
          errorMessage: true,
          isDownloading: false,
        });
      });
  }

  render() {
    const { isDownloading, errorMessage } = this.state;
    return (
      <div>
        <MainButton type="button" onClick={this.handleClick} disabled={isDownloading}>
          Lagre som PDF
        </MainButton>

        {errorMessage && <p>Noe gikk galt. Prøv igjen.</p>}
      </div>
    );
  }
}
