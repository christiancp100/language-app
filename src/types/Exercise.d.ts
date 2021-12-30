interface Word {
  english: string,
  german: string
}

interface Exercise {
  words: Array<Word>
  options: Array<Word>
  missingWord: Word
}