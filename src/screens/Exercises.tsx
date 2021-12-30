import React, { useMemo, useState } from 'react'
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import ProgressBar from '../components/ProgressBar';
import theme from '../../theme';
import useGetExercises from '../hooks/useGetExercises';
import Loading from '../components/Loading';
import Exercise from '../components/Exercise';
import Button from '../components/Button';


const Exercises = () => {
  const { exercises, loading } = useGetExercises()
  const [currentExercise, setCurrentExercise] = useState(0)

  const exercisesFinished = useMemo(() => currentExercise === exercises.length, [exercises, currentExercise])

  const handleLoadNextExercise = () => {
    setCurrentExercise(currentExercise + 1)
  }

  const reset = () => setCurrentExercise(0)

  if (loading) {
    return <Loading />
  }

  return (
    <>

      <>
        <ProgressBar value={(currentExercise + 1) / exercises.length * 100} />
        <View style={styles.container}>
          {exercisesFinished ?
            <>
              <Text style={styles.fillText}>
                Great! You have finished all your exercises
              </Text>
              <Button mt={10} onPress={reset} variant="default">Restart</Button>
            </>
            :
            <>
              <Text style={styles.fillText}>Fill in the missing word</Text>
              <Exercise loadNextExercise={handleLoadNextExercise} exercise={exercises[currentExercise]} />
            </>
          }
        </View>
      </>


    </>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: "15%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.secondary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  fillText: {
    color: theme.colors.default,
    fontSize: theme.fontSize.m,
    marginTop: 25
  },
  exerciseContainer: {
    height: "70%",
    marginBottom: "10%"
  }
})

export default Exercises