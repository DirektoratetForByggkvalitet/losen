import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';

import { setLanguage } from '../state/actions';
import { getCurrentLanguage } from '../utils/selectors';
import { SmallButton } from '../primitives/Button';
import { Simple as Grid } from '../primitives/grid';

class LanguageSelector extends Component {
  static propTypes = {
    translations: PropTypes.objectOf(PropTypes.object).isRequired,
    setLanguage: PropTypes.func.isRequired,
    currentLanguage: PropTypes.string.isRequired,
  };

  handleLanguageSelect = languageKey => () => this.props.setLanguage(languageKey);

  render() {
    const {
      translations: translationsObject,
      currentLanguage,
    } = this.props;

    // Get an array of the translations from the object values
    const translations = values(translationsObject);

    // Return no lang selector if we have no translations
    if (!translations || !translations.length) {
      return null;
    }

    // Return no lang selector if we have only norwegian
    if (translations.length === 1 && translationsObject.no) {
      return null;
    }

    return (
      <Grid padItems>
        {[
          /**
           * If we have translations, but no norwegian one we need
           * to add it in order to have a way to select the norwegian
           * original
           */
          ...(
            translationsObject.no ?
              [] :
              [{ key: 'no', name: 'Norsk' }]
          ),
          ...translations,
        ].map(({ key, name }) => (
          <SmallButton
            key={key}
            disabled={key === currentLanguage}
            onClick={this.handleLanguageSelect(key)}
          >{name}</SmallButton>
        ))}
      </Grid>
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
