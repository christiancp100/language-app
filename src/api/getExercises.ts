import { collection, query, getDocs, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const sentencesRef = collection(db, "sentences");

const getExercises = async () => {
  const q = query(sentencesRef)
  const docs = await getDocs(q)
  const exercises = []

  for (const exercise of docs.docs) {

    const words = []
    const options = []

    const missingWordQuery = await getDoc(exercise.data().missingWord);
    const missingWord = missingWordQuery.data();

    for (const w of exercise.data().words) {
      const wordQuery = await getDoc(w);
      words.push(wordQuery.data())
    }

    for (const option of exercise.data().options) {
      const optionQuery = await getDoc(option)
      options.push(optionQuery.data())
    }

    exercises.push({
      missingWord,
      words,
      options
    })
  }

  return exercises
}

export default getExercises