import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {
  const feedbackContext = useContext(FeedbackContext)
  const { feedback } = feedbackContext

  if (!feedback || feedback.length === 0) {
    return <p>No feedback available</p>
  }

  return (
    <div className='feedback-list'>
      {feedback.map(item => (
        <FeedbackItem key={item.id}
          data={item} />
      ))}
    </div>
  )
}

export default FeedbackList
