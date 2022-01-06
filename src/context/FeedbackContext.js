import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])
  const [current, setCurrent] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchFeedback()
  }, [isLoading])

  const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:1212/feedback?_sort=id&o_order=desc`)
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  const addFeedback = (newFeedback) => {
    const id = uuidv4()
    console.info(`Adding feedback # ${id}`)
    newFeedback.id = id
    setFeedback([...feedback, newFeedback])
  }

  const deleteFeedback = (id,) => {
    console.warn(`Deleting feedback # ${id}`)
    setFeedback(feedback.filter(item => item.id !== id))
  }

  const editFeedback = (id, newItem) => {
    console.info(`Editing feedback # ${id}`)
    newItem.id = id
    setFeedback(feedback.map(item => (item.id === id) ? { ...item, ...newItem } : item))
    setCurrent({})
  }

  return <FeedbackContext.Provider value={{
    feedback,
    current,
    isLoading,

    setFeedback,
    addFeedback,
    deleteFeedback,
    setCurrent,
    editFeedback,
    setIsLoading
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext