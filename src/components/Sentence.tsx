import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import theme from '../../theme'
import Option from './Option'


interface Props {
  hide?: boolean
  underline?: boolean
  language?: Language
  words: Array<Word>
  missingWord: Word
  selectedOption?: string
}


const Sentence = ({ hide = false, underline, language = "english", words, missingWord, selectedOption }: Props) => {

  const isUnderlined = (word: Word) => underline && missingWord[language] === word[language]
  const isHidden = (word: Word) => hide && missingWord[language] === word[language]

  return (
    <View style={styles.originalSentenceContainer}>
      {words?.map((word: Word, i: number) => {
        return (<React.Fragment key={i}>
          <Text
            style={
              {
                ...styles.originalSentence,
                ...(isUnderlined(word) ? styles.underline : {}),
                ...(isHidden(word) ? styles.hide : {})
              }
            }>
            {`${word[language]} `}
          </Text>
          {
            isHidden(word) &&

            (selectedOption ? <View style={styles.missingWordCointainer}><Option option={selectedOption} /></View> : <View style={{ width: 50, borderBottomColor: theme.colors.default, borderBottomWidth: 2, marginHorizontal: 5 }} />)
          }
        </React.Fragment>)
      })}
    </View >

  )
}

const styles = StyleSheet.create({
  originalSentenceContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 25,
  },
  originalSentence: {
    color: theme.colors.default,
    fontSize: theme.fontSize.l,
  },
  underline: {
    textDecorationLine: "underline",
    fontWeight: "900"
  },
  hide: {
    display: "none"
  },
  missingWordCointainer: {

    marginHorizontal: 5
  }
})

export default Sentence