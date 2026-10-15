# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Overview

Turborepo + npm workspaces monorepo for **Losen**, a schema-driven wizard framework (React, Redux, styled-components) published to npm as `losen`. Node 20 / npm 9.

- `packages/losen` – the framework itself (the only published package)
- `packages/config` – shared ESLint config and `tsconfig.base.json` / `tsconfig.lib.json`
- `apps/storybook` – the documentation site (MDX), deployed to GitHub Pages from `master` by CI
- `apps/example` – complete example wizard (React 18, Vite)
- `apps/react-17` – compatibility check against React 17 (losen supports React 17 and 18)

Apps consume `losen` via the workspace (`"losen": "*"`), resolved through its built `dist/`, so the package must be built (or running `dev`) for apps to pick up changes.

## Commands

Run from the repo root (Turbo fans out to workspaces):

```sh
npm install
npm run dev          # tsup --watch for losen + vite/storybook dev servers
npm run build        # builds losen first (^build), then apps
npm run lint         # type-check (tsc --noEmit) for losen/example; eslint for react-17
npm test             # jest (only packages/losen has tests)
npm run build -- --scope=storybook   # build a single workspace (as CI does)
```

Single test file / test name (from `packages/losen`):

```sh
cd packages/losen
npx jest utils/dsl/test/validator.test.ts
npx jest -t "part of test name"
```

CI (`.github/workflows/ci.yml`) runs install → lint → test → build on pushes/PRs to `master`.

Releasing: `npm run version <major|minor|patch>` then `npm run publish-packages` (publish depends on test, lint and build).

## Architecture (packages/losen)

Public API is in `index.ts`: the `Wizard` component, `StyleProvider`, `state` (reducer/actions/`NAME`), `dsl`, `Primitives`, tracking helpers, and all schema TypeScript types (`Node`, `RenderableNode`, `WizardDefinition`, `Render<T>`, `RenderWithData<T>`…). New node types must be added to the `NodeType` union, the `Node` union and a matching `Renderable*` type there.

**Data flow:**

1. A wizard is a `WizardDefinition` (`meta`, `schema`, optional `computed`) — a tree of JSON nodes (`Page`, `Result`, `Branch`, `Group`, inputs like `Radio`/`Checkbox`/`Number`, etc.).
2. The host app creates a Redux store with `state.reducer(wizard)` mounted under the key `state.NAME`. On every `SET_DATA` the reducer (`state/reducer.ts`) sets the value by dotted path, re-runs `reduceWizard` to find which nodes are now visible, **purges answers for nodes no longer visible** (`removeInactiveQuestions`, keeping `page`, `$computed`, `$external`, `$language`), then recomputes `$computed` from `wizard.computed`.
3. `components/Wizard.tsx` (`mapStateToProps`) runs `utils/reduce-wizard.ts` to turn the raw schema into a `RenderableNode[]`: resolves `Branch` nodes, `Reference` nodes, `show`/`hide` expressions, `disabled` expressions, translations, and attaches validation `errors` to each node.
4. `components/Page.tsx` / `Result.tsx` render pages; `components/blocks/Block.tsx` maps each node `type` to its block component in `components/blocks/`.

**Expression DSL** (`utils/dsl/`): `show`, `hide`, `disabled`, `Branch.test`, validators and `computed` values are all `Expression` objects — simple `{ field, operator, value }` or complex `{ type: "and" | "or", clauses }`. `field` is a lodash path into state (e.g. `"question.yes"`, `"$computed.x"`).

**Schema validation**: `utils/validator` checks a wizard definition; `Wizard` logs results to the console when running on `localhost`.

**Styling**: `primitives/` are styled-components building blocks (exported as `Primitives`); default theme tokens live in `styles.ts` and can be overridden via the `styles` prop / `StyleProvider`.

**Tests**: colocated in `test/` folders next to the code (`utils/test`, `utils/dsl/test`, `state/test`, `components/**/test`), using ts-jest in a node environment. `jest.config.js` maps bare imports like `utils/...`, `state/...` to the package root.

## Documentation

The Storybook MDX files in `apps/storybook/src` (`building-blocks/`, `dsl/`, `schema/`, `primitives/`) are the user-facing docs for schema nodes and the DSL — update them when changing node options or DSL operators.
