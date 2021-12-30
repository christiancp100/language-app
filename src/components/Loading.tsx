import React from 'react'
import { Spinner, Heading } from 'native-base'
import theme from '../../theme'


const Loading = () => (
  <>
    <Spinner accessibilityLabel="Loading..." />
    <Heading color={theme.colors.secondary} fontSize="md">
      Loading
    </Heading>
  </>
)

export default Loading