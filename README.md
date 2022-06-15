# Welcome
This is the source code for my personal portfolio site.

My website uses nodejs, ensure you have that installed first.

## Installation

```bash
$ yarn
```
## Development

- Fires up a local development server
- Run unit tests on changes to JS
- Runs linting on changes to CSS
- Complies SCSS to CSS
- Transpiles JS from ES6+ to ES5

```bash
$ yarn start
```

## Production

To load my site in production mode

```bash
$ yarn build
$ yarn serve
```

## Linting

To lint JS.
```bash
$ yarn lint
```

## Testing

### Unit Tests

Jest and Enzyme as used for unit tests.

Run unit tests for files changes since last commit.

```bash
$ yarn test:unit
```

Watches for changes to files
- `yarn start` must be done first

```bash
yarn test:unit:watch
```

View unit test coverage

```bash
$ yarn test:coverage
```

Run all unit tests

```bash
$ yarn test:all
```

### e2e Tests

Cypress is used for e2e testing.

Run e2e tests

```bash
yarn test:e2e
```

Run e2e tests in GUI mode
- Snapshots are disabled in this mode as the snapshots use a different viewport size to `yarn test:e2e` and fail.

```bash
yarn test:e2e:open
```

Update e2e snapshots

```bash
yarn test:e2e:updatesnapshots
```

## Old website source code:

- v1 website can be found here. https://github.com/TimMansell/portfolio/tree/v1
- v2 website can be found here. https://github.com/TimMansell/portfolio/tree/v2