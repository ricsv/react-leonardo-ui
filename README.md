# react-leonardo-ui

React implementation of [Leonardo UI](https://github.com/qlik-oss/leonardo-ui).

[![Build Status](https://travis-ci.org/ricsv/react-leonardo-ui.svg?branch=master)](https://travis-ci.org/ricsv/react-leonardo-ui)
[![npm](https://badge.fury.io/js/react-leonardo-ui.svg?branch=master)](http://badge.fury.io/js/react-leonardo-ui)
[![Coverage Status](https://coveralls.io/repos/github/ricsv/react-leonardo-ui/badge.svg?branch=coveralls)](https://coveralls.io/github/ricsv/react-leonardo-ui?branch=master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)

## Installation

__NPM__

```sh
npm install --save react-leonardo-ui
```

__Yarn__

```sh
yarn add react-leonardo-ui
```

## Usage

__ES2015__

```js
import { Button } from 'react-leonardo-ui';
```

__CommonJS__

```js
const Button = require('react-leonardo-ui').Button;
```

### Props passing

Properties that are not recognized by a component are passed to the root element (of most components). This removes
extra abstractions and helps keeping components small and manageable.

```jsx
<Button active title="My title" onClick={clickHandler}>
  My button
</Button>
```

In the example above, the Button component will handle the `active` attribute and pass `title` and
`onClick` to its `button` element.

## Contributing

You are more than welcome to contribute to the project. Just follow the instructions on [CONTRIBUTING.md](CONTRIBUTING.md) to setup the development environment.
