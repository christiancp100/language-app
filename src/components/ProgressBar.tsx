import { Progress } from 'native-base'
import React from 'react'

interface Props {
  value: number
}

const ProgressBar = (props: Props) => {
  return (
    <Progress width={"80%"} height={5} {...props} />
  )
}

export default ProgressBar