import React from 'react'
import Flex from '../../blox/Flex'

const Main: React.SFC<{}> = () => {
  return (
    <Flex
      flexColumn
      bgcolor='lightblue'
      m={2}
    >
      <div>
        Main Content
      </div>
      <div>
        Secondary Content
      </div>
      <div>
        Tertiary Content
      </div>
    </Flex>
  )
}

export default Main
