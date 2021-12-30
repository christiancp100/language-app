import { SimpleGrid } from 'native-base'
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Button from './Button'
import Option from './Option'
import Sentence from './Sentence'
import Modal from './Modal'
import { LANGUAGE, SUCCESS_MESSAGE } from '../constants'

interface Props {
  exercise: Exercise
  loadNextExercise: () => void
}

const Exercise = ({ exercise, loadNextExercise }: Props) => {
  const [selectedOption, setSelectedOption] = useState("")
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)
  const [isContinuePressed, setIsContinuePressed] = useState<boolean>(false)

  const selectOption = (option: string) => {
    const currentOption = option === selectedOption ? "" : option
    setSelectedOption(currentOption)
  }

  const makeCorrection = () => {
    const { missingWord } = exercise
    setIsAnswerCorrect(missingWord[LANGUAGE] === selectedOption)
    setIsContinuePressed(true)
  }

  const resetExercise = () => {
    setIsContinuePressed(false)
    setSelectedOption("")
    setIsAnswerCorrect(null)
  }

  const handleLoadNextExercise = () => {
    loadNextExercise()
    resetExercise()
  }

  return (
    <View style={styles.container}>
      <Sentence {...exercise} underline={true} />
      <View style={styles.exerciseContainer}>
        <Sentence selectedOption={selectedOption} {...exercise} language={LANGUAGE} hide={true} />
        <SimpleGrid columns={2} space={2} alignItems={"center"}>
          {exercise?.options.map((option, i) =>
            <Option key={i} disabled={isContinuePressed} selectedOption={selectedOption} selectOption={selectOption} option={option[LANGUAGE]} />)}
        </SimpleGrid>
      </View>
      <Button onPress={makeCorrection}>Continue</Button>

      <Modal open={isContinuePressed} variant={isAnswerCorrect ? "primary" : "danger"} onContinue={handleLoadNextExercise} text={isAnswerCorrect ? SUCCESS_MESSAGE : `Answer: ${exercise?.missingWord[LANGUAGE]}`} />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20%"
  },
  exerciseContainer: {
    flex: 1,
    justifyContent: "space-between",
    maxHeight: "50%",
    alignItems: "center"
  }
})

export default Exercise