import React, { forwardRef } from 'react'
import Box, { BoxProps } from '@material-ui/core/Box'

const Flex: React.FC<FlexProps> =
  forwardRef((props: FlexProps, ref?: React.Ref<HTMLElement>) => {
    const {
      children,
      flex,
      flexDirection,
      flexFull = false,
      ...other
    } = props

    const flexProps = getFlexProps({ flex, flexDirection, flexFull })
    const FlexProps = {
      ...flexProps,
      ...other,
      ref,
    }

    return (
      <Box {...FlexProps}>
        {children}
      </Box>
    )
  })

Flex.displayName = 'Flex'

export default Flex

const isValid = (value: string | number | undefined): boolean =>
  Boolean(value) || value === 0

const getFlexProps = ({
  flex,
  flexDirection,
  flexFull,
}: Partial<FlexProps>): Partial<FlexProps> => {
  return {
    flexDirection,
    display: 'flex',
    ...(isValid(flex) ? { flex } : {}),
    ...(isValid(flex) && flexDirection === 'column' ? { minHeight: 0 } : {}),
    ...(flexFull ? { flexDirection: 'column', flex: 1, minHeight: 0 } : {}),
  }
}

export interface FlexProps extends BoxProps {
  flexFull: boolean
  ref?: React.Ref<HTMLElement>
}
