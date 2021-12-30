import { useEffect, useState } from "react";
import getExercises from "../api/getExercises";


const useGetExercises = () => {
  const [exercises, setExercises] = useState<Exercise[] | []>([])
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<unknown>(null)

  useEffect(() => {
    const handleGetExercises = async () => {
      setLoading(true)

      try {
        const exercisesList = await getExercises()
        setExercises(exercisesList)
      } catch (err) {
        setErrors(err)
      }
      finally {
        setLoading(false)
      }

    }

    handleGetExercises()
  }, [])

  return { exercises, loading, errors }

}

export default useGetExercises