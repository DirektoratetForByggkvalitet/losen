/* eslint global-require:0 no-underscore-dangle:0 */

// Include polyfill if not already in scope
if (!window._babelPolyfill) {
  require('babel-polyfill');
}

require('details-polyfill');

export * as state from './state';

export Wizard from './components/Wizard';
export StyleProvider from './components/StyleProvider';
export track, { trackEvent } from './utils/tracking';

export * as Primitives from './primitives';
export * as dsl from '../shared/utils/dsl';
