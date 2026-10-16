## Breaking changes

1. All branch nodes must now have `"type": "Branch"`
2. `warningBeforeUnload` on `Wizard` now defaults to `false`. Pass `warningBeforeUnload` (or `warningBeforeUnload={true}`) to keep prompting users before they leave the page with unsaved answers.