import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Wizard, StyleProvider } from 'dibk-wizard-framework';
import store from './store';
import cat from './api/cat.json';
import Intro from './pages/Intro';

import dataExport from './exports/data-export';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: true,
    };
    this.closeIntro = this.closeIntro.bind(this);
  }

  closeIntro() {
    this.setState({
      intro: false,
    });
  }

  render() {
    if (this.state.intro) {
      return (
        <StyleProvider>
          <Intro close={this.closeIntro} />
        </StyleProvider>
      );
    }

    return (
      <Provider store={store}>
        <Wizard wizard={cat} exports={{ dataExport }} />
      </Provider>
    );
  }
}
