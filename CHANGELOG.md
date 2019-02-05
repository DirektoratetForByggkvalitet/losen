# Changelog

All notable changes to this project will be documented in this file, starting from version 3.0.2.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [4.1.1] - 2019-02-05

### Fixed

- Checkbox: Default to an empty object in case currentValue is empty

## [4.1.0] - 2019-02-05

### Added

- `warningBeforeUnload` prop added to `Wizard` component, making it possible to alert the user before leaving Losen if they use the browser back-button or closes tab/window. Defaults to true.
- Added `allMandatory` option to the Chebox node allowing it to be used
  as a checklist (where the user must tick all the boxes for it to be valid)

## [4.0.0] - 2019-02-04

### Changed

- Use object for heading and lead texts on result page, and make it possible to add
  texts for all four variations on incomplete/with error.
- When replacing Reference nodes with the referenced node, keep the show/hide specified
  on the Reference. Previously the whole Reference node was replaced without regard
  for the show/hide setting on the Reference.
- Exclude $external from losen state cleanup in reducer, in the same way that $computed
  is left untouched.

### Removed

- ErrorResult component. Equivivalent with the Result component, except from the print/export
  being hidden. Added logic to Result to show those instead.

### Fixed

- Add sanity checks in Checkbox result page summary to account for wonky data in state
- Recurse down through schema when checking for soft errors, to catch deeply nested
  ones (e.g. in Groups)

## [3.4.0] - 2018-12-19

### Added

- `showResetModal` prop added to `Wizard` component, making it possible to supress
  the modal that usually pops up asking users if they want to reset or continue where
  they left off.

### Changed

- Updated getting started docs
- Change presentation of checkbox on result-page

### Fixed

- Fix whitespace error

## [3.3.0] - 2018-12-04

### Added

- Added `simple` option for `Table` block
- Added `grid` layout option for the `Checkbox` and `Radio` input blocks

### Changed

- Reduced font size for H4 `Heading` from 16 👉 14px
- Reduced font size for H3 in `Input` from 18 👉 18px
- Slightly reduced margin below paragraphs

### Fixed

- Fixed bug in state management causing state updates to be ignored if the
  `id` and `property` properties on input blocks were not the same value, or
  if the property was a nested value (like engine.displacement).

## [3.2.5] - 2018-07-24

### Added

- Added visual indicator to show you're on result page
- Show debug label for images when the debug query param is added to the url
- Added functionality for clearing other fields when an option is selected for a radio group. You can pass in an array of properties you want to clear when this question is selected

### Changed

- Adjust grid and spacing
- Reduce number of different font weights
- Adjust overall spacing on blocks

## [3.1.1] - 2018-06-22

🚨 This was tagged as a minor change, even though the commit message states that the change is breaking.

### Changed

- Refactor `Sum`
- Allow `page` and `$computed` in the `removeInactiveQuestions` function when updating state

### Removed

- Remove `SpecialSum`. Use two sums instead
- Remove `beforeResult` on the `Result` component to reduce the complexity

## [3.0.2] -

[unreleased]: https://github.com/DirektoratetForByggkvalitet/losen/compare/v4.1.0...HEAD
[4.1.0]: https://github.com/DirektoratetForByggkvalitet/losen/compare/v4.0.0...v4.1.0
[4.0.0]: https://github.com/DirektoratetForByggkvalitet/losen/compare/v3.4.0...v4.0.0
[3.4.0]: https://github.com/DirektoratetForByggkvalitet/losen/compare/v3.3.0...v3.4.0
[3.3.0]: https://github.com/DirektoratetForByggkvalitet/losen/compare/v3.2.5...v3.3.0
[3.2.5]: https://github.com/DirektoratetForByggkvalitet/losen/compare/v3.1.1...v3.2.5
[3.1.1]: https://github.com/DirektoratetForByggkvalitet/losen/compare/v3.0.2...v3.1.1
