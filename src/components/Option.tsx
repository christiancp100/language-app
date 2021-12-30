import { Button } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import theme from '../../theme'

interface Props {
  option: string
  selectOption?: (option: string) => void
  selectedOption?: string
  disabled?: boolean
}

const Option = ({ option, selectedOption, selectOption = () => { }, disabled = false }: Props) => {
  const isSelected = selectedOption === option
  return (
    <Button disabled={disabled} onPress={() => selectOption(option)} style={[styles.container, ...[isSelected ? styles.selected : {}]]} _pressed={styles.pressed} bg={theme.colors.default}>
      <Text style={(isSelected ? styles.transparentText : styles.text)}>{option}</Text>
    </Button>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 45,
    borderRadius: 15,
    textAlign: "center"
  },
  pressed: {
    backgroundColor: theme.colors.disabled
  },
  text: {
    color: theme.colors.secondary,
    fontWeight: "bold"
  },
  selected: {
    backgroundColor: theme.colors.disabled,
  },
  transparentText: {
    color: theme.colors.disabled
  },

})

export default Option