import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'

const Blox = forwardRef((props, ref) => {
  const {
    children,
    flex,
    flexDirection,
    flexFull,
    ...other
  } = props

  const flexProps = getFlexProps({ flex, flexDirection, flexFull })

  return (
    <Box
      {...flexProps}
      {...other}
      ref={ref}
    >
      {children}
    </Box>
  )
})

Blox.displayName = 'Blox'
Blox.propTypes = {
  flexFull: PropTypes.bool,
  flex: PropTypes.number,
  flexDirection: PropTypes.string,
}
Blox.defaultProps = {
  flexFull: false,
  flex: null,
  flexDirection: null,
}

export default Blox

const isValid = value =>
  Boolean(value) || value === 0

const getFlexProps = ({ flex, flexDirection, flexFull }) => {
  return {
    display: 'flex',
    flexDirection,
    ...(isValid(flex) ? { flex } : {}),
    ...(isValid(flex) && flexDirection === 'column' ? { minHeight: 0 } : {}),
    ...(flexFull ? { flexDirection: 'column', flex: 1, minHeight: 0 } : {}),
  }
}