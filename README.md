# MUI-Blox

Useful variants of the Material-UI `Box` component. Currently the only component is `Flex`, which mimics the behavior of `react-flexbox`. However, in addition to this functionality, all the props of `Box` are available. 
This version also includes a fix for a the min-height bug that interferes with the ability to create scrollable flex elements for Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=1043520)

## Install

```
yarn add mui-blox
# or
npm install --save mui-blox
```

### Prerequisites

Material-UI v4 or greater.
(https://github.com/mui-org/material-ui)

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
