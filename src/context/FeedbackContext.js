import { createContext, useState, useEffect } from "react";
import { feedbackData } from "../data/FeedbackData";
import { v4 as uuidv4 } from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])
  const [current, setCurrent] = useState({})

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:1212/feedback?_sort=id&o_order=desc`)
    const data = await response.json()
    setFeedback(data)
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

    setFeedback,
    addFeedback,
    deleteFeedback,
    setCurrent,
    editFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext