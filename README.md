# UTE Exchange Web Application

UTE Exchange is SPA built with ReactJS.

## Installation

Project requires [Node.js](https://nodejs.org/) v11+ to run.

> This project using [Lerna](https://lerna.js.org/) - A tool for managing JavaScript projects with multiple packages.
> Only use [Yarn](https://yarnpkg.com/lang/en/) for package manager.

**Install the dependencies and devDependencies and Let's start coding**

```sh
$ yarn
$ yarn start:<app-name>
```

Example:

```sh
$ yarn start:@ute-exchange/web-app
```

**Creating a Production Build**

```sh
$ yarn
$ yarn build:<app-name>
```

## Install new package

```sh
$ yarn lerna add --scope=<app-name> <package-name>
```

Example:

```sh
$ yarn lerna add --scope=@ute-exchange/web-app react
```

## Built with

- [React] - A JavaScript library for building user interfaces.
- [React-Router] - A routing library built on top of the react which is used to create the routing in react apps.
- [Redux] - A Predictable State Container for JS Apps.
- [Redux-Saga] - A library that aims to make application side effects easier to manage, more efficient to execute, easy to test, and better at handling failures.
- [styled-component] - styled-components is the result of wondering how we could enhance CSS for styling React component systems.
- [Immutable] - Immutable.JS was designed to provide immutability in a performant manner in an effort to overcome the limitations of immutability with JavaScript.
- [Webpack] - Webpack is used to compile JavaScript modules.

[react]: https://reactjs.org/
[redux]: https://redux.js.org/
[redux-saga]: https://redux-saga.js.org/
[react-router]: https://github.com/ReactTraining/react-router#readme
[webpack]: https://webpack.js.org/
[immutable]: https://immutable-js.github.io/immutable-js/
[styled-component]: https://www.styled-components.com/
