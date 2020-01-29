import React, { forwardRef } from 'react'
import Box, { BoxProps } from '@material-ui/core/Box'

const Flex: React.FC<FlexProps> =
  forwardRef((props: FlexProps, ref?: React.Ref<HTMLElement>) => {
    const {
      children,
      flex,
      flexDirection,
      flexFull = false,
      flexColumn = false,
      flexRow = false,
      ...other
    } = props

    const flexProps = getFlexProps({ flex, flexDirection, flexFull, flexColumn, flexRow })
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
  flexColumn,
  flexDirection,
  flexFull,
  flexRow,
}: Partial<FlexProps>): Partial<FlexProps> => {
  return {
    flexDirection,
    display: 'flex',
    ...(isValid(flex) ? { flex } : {}),
    ...(isValid(flex) && flexDirection === 'column' ? { minHeight: '0%' } : {}),
    ...(isValid(flex) && flexDirection === 'row' ? { minWidth: '0%' } : {}),
    ...(flexFull ? { flexDirection: 'column', flex: 1, minHeight: '0%' } : {}), // maintained for backwards compatibility
    ...(flexColumn ? { flexDirection: 'column', flex: 1, minHeight: '0%' } : {}),
    ...(flexRow ? { flexDirection: 'row', flex: 1, minWidth: '0%', minHeight: '0%' } : {}),
  }
}

export interface FlexProps extends BoxProps {
  flexColumn?: boolean
  flexFull?: boolean
  flexRow?: boolean
  ref?: React.Ref<HTMLElement>
}
