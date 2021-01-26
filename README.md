
[![Build Status](https://travis-ci.com/react-ventoji-components/ventoji-components.svg?branch=master)](https://travis-ci.com/react-ventoji-components/ventoji-components)

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

Go inside lib folder and execute `npm publish` in order to push all the changes to npm repository.

## Requirements

You can choose other services and accout to host your code and documentation. For this project the free plan are used for the following accounts:

- npm package account.
- travis.ci account.
- Netlify account.