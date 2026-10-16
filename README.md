# Losen

**Losen** is a schema-driven framework for building interactive wizards ("veivisere") – guided, step-by-step workflows that ask the user questions and lead them to a result. It's built with React, Redux and styled-components, and is published to npm as [`losen`](https://www.npmjs.com/package/losen).

📚 **Documentation:** [direktoratetforbyggkvalitet.github.io/losen](https://DirektoratetForByggkvalitet.github.io/losen)

## Introduction

Losen lets you describe a wizard as data instead of code. You write a schema – a tree of JSON nodes such as pages, questions, branches and results – and Losen takes care of rendering it, keeping track of the user's answers and deciding what should be shown next.

- **Who it's for**: Organizations that want to offer self-service guidance to citizens, employees or customers, such as helping someone figure out whether they need a building permit.
- **What it does**: Turns a wizard definition into a working, accessible user interface with navigation, validation, branching logic, calculations and a summary of the result.
- **Why it matters**: The rules and content of a wizard live in one declarative schema, making wizards easier to build, review and maintain – and portable between any tool that speaks the Losen schema.

## Veiviserbyggeren

Don't want to write schemas by hand? [**Veiviserbyggeren**](https://github.com/DirektoratetForByggkvalitet/veiviserbygger) is a Losen-compliant wizard builder that gives you a visual editor for creating, managing and hosting wizards, and lets you embed them on your own website.

## What's in this repository

This is a monorepo containing the framework itself and a few supporting projects:

| Workspace          | Description                                                     |
| ------------------ | --------------------------------------------------------------- |
| `packages/losen`   | The Losen framework, published to npm as `losen`.               |
| `apps/storybook`   | The documentation site, published to GitHub Pages.              |
| `apps/example`     | A complete example wizard you can use as a starting point.      |
| `apps/react-17`    | A compatibility check ensuring Losen keeps working on React 17. |

## About

Losen is developed and maintained by [Direktoratet for byggkvalitet](https://dibk.no) (the Norwegian Building Authority), where it powers a number of public-facing wizards.

## License

[MIT](./packages/losen/package.json)
