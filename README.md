
[![Build Status](https://travis-ci.com/react-ventoji-components/ventoji-components.svg?branch=master)](https://travis-ci.com/react-ventoji-components/ventoji-components)

[![codecov](https://codecov.io/gh/react-ventoji-components/ventoji-components/branch/master/graph/badge.svg?token=g0MOUrH8oZ)](https://codecov.io/gh/react-ventoji-components/ventoji-components)

## Install
```
npm install ventoji-components
```

## Docs
[Component documentation](https://app.netlify.com/sites/objective-jang-fd103f)

## Workflow

After a new component is added to the library with the following structure `index.js`, `ComponentName.js` and `ComponentName.spec.js` follow the steps below:

### Development server

Run `npm run start` to see your components documentation in `localhost`.

### Commit changes
Add your files and commit your changes following convention of commit. Before pushing any changes make sure you update all the packages running `npm run nuc`.

### Release version
After changes `run npm release` to automatically increase the control of version according to the changes applied (major, minor or patch). You can use `npm version OPTION` as well to generate the new version.

### Publish version of the Lib
First execute `npm run build:lib` to generate the components files to be published.

Go inside lib folder and execute `npm publish` in order to push all the changes to [npm repository](https://www.npmjs.com/package/ventoji-components).

## Deploy
Every time a change is merge to the master, the documentation is deploy automatically in Netlify. This button shows the status of the deployment.
[![Netlify Status](https://api.netlify.com/api/v1/badges/efafbf28-ff8a-4136-9306-72618d925f7c/deploy-status)](https://app.netlify.com/sites/objective-jang-fd103f/deploys)

## Requirements

You can choose other services and accout to host your code and documentation. For this project the free plan are used for the following accounts:

- npm package account.
- travis.ci account.
- Netlify account.

## Detailed scripts

* `npm run prestart` – executed before npm run start to generate the custom documentation of components.
* `npm run start` – run start:docs and gen:docs-watch scripts for development.
* `npm run start:docs` –
* `npm run gen:docs` –
* `npm run gen:docs-watch` –
* `npm run build:custom` – build compiled files using webpack (it doesn't work for ES modules), create-react-app doesn't compile into Commonjs, ES can be only tree shaken.
* `npm run build:docs` – 
* `npm run test:local` – run all tests executing ./scripts/tests.js
* `npm run build:css` – Copy all css file using `cpx` package into `lib` folder.
* `npm run prebuild:lib` – Remove old files in `lib folder` using `rimraf` dependencie.
* `npm run build:lib` – run build:commonjs, build:css and build:copy-files scripts to generate the final `lib` folder.
* `npm run build:copy-files` – copy all files necessary for distribution into `lib` folder.
* `npm run predeploy:docs` – 
* `npm run build:commonjs` – transpile all files in src/components into commonjs and copy in `lib` folder
* `npm run commonjs` – Simple test for transpiling code using babel cli for `PasswordInput.js` component.
* `npm run prepublish` –
* `npm run ncu` –
* `npm run ncu:update` –
* `npm run lint` – check code formatting and rules for react code and JS.
* `npm run lint:fix` – fix all problems found on the code 
* `npm run prettier` – check code formatting rules defined on .prettierrc file
* `npm run release` – after changes have been submitted run this script to automatically generate the version.
* `npm run storybook` – start development for storybook for all components
* `npm run build-storybook` – generates the static files for storybook before publishing in gh-pages
* `npm run deploy-storybook` – publish storybook in gh-pahes manually.
* `npm run test:coverage` – 
* `npm run test` – Run unitary test designed for components.
* `npm run test:badges` – Review the test coverage for the whole app.
* `prepare` –