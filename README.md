# Utils React Hooks 

> A hooks library for to help you with your developments with React library

The library use [TSDX](https://github.com/jaredpalmer/tsdx) for the build the library template

## Commands

The recommended workflow is to run TSDX in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

## Configuration

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

#### Setup Files

This is the folder structure we set up for you:

```txt
/src
  /hooks          # ADD NEW HOOK HERE
  index.tsx       # ADD REFERENCE THE HOOK HERE
/test             # ADD TEST HERE
.gitignore
package.json
README.md         
tsconfig.json
```

#### React Hooks Testing Library

We doing the tests to the hooks with [react-hook-testing-library](https://react-hooks-testing-library.com/). It is very simple and you can to read the its documentation.

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings.

## Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)