import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as DefaultButton, IButtonProps } from 'native-base'
import theme from '../../theme'

type Variant = "primary" | "secondary" | "default"

interface Props extends IButtonProps {
  variant?: Variant
}

const Button = ({ variant = "primary", ...props }: Props) => {

  return <DefaultButton {...props} style={styles.button} _text={styles.text} bg={theme.colors[variant]} _pressed={styles.pressed} />
}

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: "90%",
    borderRadius: 60,
  },
  text: {
    fontSize: theme.fontSize.m,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  pressed: {
    backgroundColor: theme.colors.disabled
  }
})

export default Button