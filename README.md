# MUI-Blox

This project provides a simple extension of the Material-UI `Box` component called `Flex`. It mimics the behavior 
of `flexbox-react` and exposes a similar API. All the props of `Box` are also available via Material-UI's built-in styling 
functions (which is in turn insipired by `styled-system`). 

This version includes a fix for a the [min-height bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1043520) that 
interferes with the ability to create scrollable flex elements for Firefox.

# Why

This library greatly simplifies layout styling in JSX. If you know how to use flexbox, you know how to use the `Flex` 
component.

There's no need for <Page>, <View>, <Section>, <PaddedBox>, <SpacedBox>, or any other arbitrarily named specced components 
to frame out your app. The terse shorthand props used by Material-UIs styling functions help reduce clutter make it easier to 
keep styling visible right where it's needed, rather than obfuscated behind myriad layout components. 

## Install

```
yarn add mui-blox
# or
npm install --save mui-blox
```

### Prerequisites

[Material-UI](https://github.com/mui-org/material-ui) v4 or greater.


## Usage

```
import React from 'react'
import { Flex } from 'mui-blox
import { Button } from '@material-ui/core

const MyComponent = props => {
  return (
    <Flex justifyContent='space-between' p={1}>
      <Button onClick={() => doSomething()}>Button1</Button>
      <Button onClick={() => doSomethingElse()}>Button2</Button>
    </Flex>
  )
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
