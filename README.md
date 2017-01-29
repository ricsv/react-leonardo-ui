# react-leonardo-ui

React implementation of [Leonardo UI](https://github.com/qlik-oss/leonardo-ui).

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
