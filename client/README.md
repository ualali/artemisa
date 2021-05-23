# Artemisa Client

Artemisa is a NASA Space Mission Control application for space explorers.

This project is a client web application, made with React, for the Artemisa
project.

## Getting started

In the project directory, you can run:

```!#shell
$ npm start
```

It runs the app in development mode and opens
[http://localhost:3000](http://localhost:3000) to view it in the browser. The
page will reload if you make edits.You will also see any lint errors in the
console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

## Blog

### 05/22/2021 Create project

1. Create the project directory:

   ```#!shell
   $ mkdir artemisa/client
   ```

2. Initialize a Node.js app:

   ```#!shell
   $ npm init
   ```

### 06/22/2021 Configure linter and formatter to improve code quality

1. Install necessary dependencies.

   ```#!shell
   $ npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser @babel/eslint-parser eslint-plugin-jest eslint-plugin-testing-library eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-webpack-plugin
   ```

   | Tool                                                                                                                                                                                                                                                 | Reason                                                                               |
   | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
   | [eslint](https://eslint.org/)                                                                                                                                                                                                                        | To detect syntax errors.                                                             |
   | [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint#readme), [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint#readme)                                                        | Used for TypeScript code linting.                                                    |
   | [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)                                                                                                                                                                           | Used for JavaScript code linting.                                                    |
   | [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest#readme), [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)                                                                 | Used for linting of testing code written for Testing Library and asserted with Jest. |
   | [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react), [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks), [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme) | Used to lint React code.                                                             |
   | [eslint-webpack-plugin]()                                                                                                                                                                                                                            | Used to get syntax errors while developing with webpack dev server.                  |

2. Configure ESLint by creating two files `.eslintignore` and `.eslintrc.yml`.

3. Configure Prettier by creating two files `.prettierignore` and
   `.prettierrc.yml`.

As a recommendation, both files `.eslintignore` and `.prettierignore` should
mimic the `.gitignore` file of the project.
