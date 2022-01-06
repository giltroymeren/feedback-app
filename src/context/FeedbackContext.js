import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])
  const [current, setCurrent] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchFeedback()
  }, [isLoading])

  const fetchFeedback = async () => {
    console.info(`Fetching feedback from database...`)
    const response = await fetch(`/feedback?_sort=id&o_order=desc`)
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  const addFeedback = async (newFeedback) => {
    console.info(`Adding feedback`)

    const response = await fetch(`/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback)
    })

    const data = await response.json()
    setFeedback([data, ...feedback])
  }

  const deleteFeedback = async (id) => {
    console.warn(`Deleting feedback # ${id}`)
    await fetch(`/feedback/${id}`, { method: 'DELETE' })
    setFeedback(feedback.filter(item => item.id !== id))
  }

  const editFeedback = async (id, newItem) => {
    console.info(`Editing feedback # ${id}`)

    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem)
    })

    const data = await response.json()
    setFeedback(feedback.map(item => (item.id === id) ? { ...item, ...data } : item))
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