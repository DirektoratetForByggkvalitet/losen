## 2026-10-16

### Breaking changes

1. `warningBeforeUnload` on `Wizard` now defaults to `false`. Pass `warningBeforeUnload` (or `warningBeforeUnload={true}`) to keep prompting users before they leave the page with unsaved answers.
2. Changing page now scrolls the top of the wizard into view instead of scrolling the window to the top. Hosts with content above the wizard or a sticky header may need `scroll-margin-top` on the wizard.
3. The default theme in `styles.ts` has new colours and larger text (body text 16px → 20px, with larger headings, line heights and icon sizes). No tokens were renamed or removed, but wizards that use the defaults will look and lay out differently. Override them through the `styles` prop to keep the old look.

## 2023-07-27

### Breaking changes

1. All branch nodes must now have `"type": "Branch"`
