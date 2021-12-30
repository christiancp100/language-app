import { Modal as DefaultModal, Text } from 'native-base'
import { IModalProps } from 'native-base/lib/typescript/components/composites/Modal'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import { StyleSheet } from 'react-native'
import theme from '../../theme'

type Variant = "danger" | "primary"

interface Props extends IModalProps {
  open: boolean
  text: string
  variant?: Variant
  onContinue: () => void
}

const Modal = ({ open, onContinue, text, variant = "primary" }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  return (
    <DefaultModal isOpen={isOpen} onClose={() => setIsOpen(false)} mt={12}>
      <DefaultModal.Content width="100%" marginBottom={0} marginTop="auto" height={"30%"} style={{ backgroundColor: theme.colors[variant] }}>
        <DefaultModal.Body style={styles.container}>
          <Text style={styles.text}>{text}</Text>
          <Button onPress={onContinue} variant="default">Continue</Button>
        </DefaultModal.Body>
      </DefaultModal.Content>
    </DefaultModal >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  text: {
    marginVertical: 15,
    fontSize: theme.fontSize.l,
    color: theme.colors.default
  }
})


export default Modal