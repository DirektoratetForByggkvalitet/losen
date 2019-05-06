import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';

import { setLanguage } from '../state/actions';
import { getCurrentLanguage } from '../utils/selectors';

export class LanguageSelector extends Component {
  static propTypes = {
    translations: PropTypes.objectOf(PropTypes.object).isRequired,
    setLanguage: PropTypes.func.isRequired,
    currentLanguage: PropTypes.string.isRequired,
  };

  handleLanguageSelect = languageKey => () => this.props.setLanguage(languageKey);

  render() {
    const {
      translations,
      currentLanguage,
    } = this.props;

    if (!translations) {
      return null;
    }

    return (
      <ul>
        {[
          { key: 'no', name: 'Norsk' },
          ...values(translations),
        ].map(({ key, name }) => (
          <li key={key}>
            <button
              disabled={key === currentLanguage}
              onClick={this.handleLanguageSelect(key)}
            >{name}</button>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  currentLanguage: getCurrentLanguage(state),
});

export default connect(
  mapStateToProps,
  { setLanguage },
)(LanguageSelector);
