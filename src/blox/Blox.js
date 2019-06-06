import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'

const Blox = ({ children, flexFull, ...props }) => {
  const BoxProps = {
    ...(props.flexFull ? { flexDirection: 'column', flex: 1 } : {}),
    ...props,
  }

  return (
    <Box
      display='flex'
      {...BoxProps}
    >
      {children}
    </Box>
  )
}

Blox.propTypes = {
  flexFull: PropTypes.bool,
}

Blox.defaultProps = {
  flexFull: false,
}

export default Box