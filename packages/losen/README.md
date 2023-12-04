# Losen - a flexible wizard framework

> [![Build Status](https://github.com/DirektoratetForByggkvalitet/losen/actions/workflows/ci.yml/badge.svg)](https://github.com/DirektoratetForByggkvalitet/losen)

From Norwegian _los_: a pilot (person who guides ships in and out of a harbour)

The wizard framework contains the logic and building blocks necessary to building wizards large and small. The framework is built with React, Redux and styled-components.

- [📚 Documentation](https://DirektoratetForByggkvalitet.github.io/losen)
- [🧙‍♀️ Source code](https://github.com/DirektoratetForByggkvalitet/losen)

# Development

## Getting started

1. Clone this repo
2. Run `npm install`
3. Run `npm run dev` to start the applications

Tests are written with jest, and can be run with `npm run test`. Linting is performed by running `npm run lint`.

## Release a new version of losen

1. `npm run version major/minor/patch` to bump version
2. `npm run publish-packages` to publish

## Building a wizard

See the [storybook documentation](https://DirektoratetForByggkvalitet.github.io/losen) for an introduction to how to build a wizard with the framework, and check out the [example project](https://github.com/DirektoratetForByggkvalitet/losen/tree/master/apps/example) for a complete example.

## Licence

See [LICENSE](https://github.com/netliferesearch/losen/blob/master/LICENCE.md) file.
