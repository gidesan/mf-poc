# App Architecture PoC based on Module Federation

## Packages

### App
The host app.
### Feature 1
Standalone, intependent Feature dynamically loaded by App.
### Feature 2
Standalone, intependent Feature dynamically loaded by App.
### API
[Library containing API call functions and mocks. The API suggests there is a backend able to install features (containing modules).

I spent very few time on it, but maybe an idea could be [pm2](https://github.com/Unitech/pm2) ([see also here](https://stackoverflow.com/questions/38032047/how-to-execute-npm-run-command-programmatically)).
### Config
Standalone feature loade by App. It provides a UI to "install" features.
### Extensions
Separate package including "overrides" to components defined in App (e.g. `ExtendedBox` is the override for `DefaultBox`).
The extendibility of a component is set at build-time.
## Getting Started

Run `yarn install`, then `yarn start`. This will build and serve all the packages

- App: [localhost:3001](http://localhost:3001/)
- Feature 1: [localhost:3002](http://localhost:3002/) 
- Feature 2: [localhost:3003](http://localhost:3003/) 
- API: [localhost:3004](http://localhost:3004/) 
- Config: [localhost:3005](http://localhost:3005/)
- Extensions: [localhost:3006](http://localhost:3006/) 

## Technical Highlights

- usage of `msw` and `@mswjs/data`: the first one mocks the APIs, the second one provides makes mocks dynamic
- usage of module federation
- usage of top-level `await`
- usage of `yarn` + `lerna` to handle a multipackage repo (monorepo)
- `Extend` component
  - as a general rule of thumb, it should make sense to let default and extended components share the same interface (—> props)
  - it could be enforced by kind of contract tests
  - although this approach could sound not-so-automagic it will be easier to track and debug

## Other Notes
Given that this is a PoC, some stuff is pretty raw. What should NOT be taken as is...is: 
- tooling (TypeScript, ESLint are missing, Prettier can be improved, the webpack config itself is far away to be production-ready)
- harcoded remote urls, they can be customized e.g. through env vars (see https://www.max-gherman.dev/docs/all-the-web/webpack/module-federation/ )
- messy application state handling with useRef + useContext + useState: in such scenario, my suggestion is going with redux and redux-toolkit
- I discourage extensions through per-file replacement (like the Maven WAR overlays): powerful but very risky. By the way, it could be probably achieved through webpack plugins/loaders, e.g.
  - https://www.npmjs.com/package/file-replace-loader
  - https://webpack.js.org/plugins/normal-module-replacement-plugin/
  - https://webpack.js.org/plugins/copy-webpack-plugin/

 
- the present PoC used https://github.com/module-federation/module-federation-examples/tree/master/dynamic-system-host as starting point, so some stuff from there is still present. It's worth a look btw because of shared deps stuff.
