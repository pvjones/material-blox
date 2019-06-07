import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'

const Blox = forwardRef(({ children, flexFull, ...props }, ref) => {
  const BoxProps = {
    display: 'flex',
    ...(flexFull ? { flexDirection: 'column', flex: 1 } : {}),
    ...props,
  }
  return (
    <Box ref={ref} {...BoxProps}>
      {children}
    </Box>
  )
})

Blox.displayName = 'Blox'
Blox.propTypes = {
  flexFull: PropTypes.bool,
}
Blox.defaultProps = {
  flexFull: false,
}

export default Blox