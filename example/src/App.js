import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Wizard, StyleProvider } from 'losen';
import store from './store';
import cat from './api/cat.json';

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
    return (
      <Provider store={store}>
        <Wizard wizard={cat} exports={{ dataExport }} />
      </Provider>
    );
  }
}
