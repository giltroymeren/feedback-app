import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
  const feedbackContext = useContext(FeedbackContext)
  const { feedback } = feedbackContext

  const average = feedback.reduce((sum, item) => {
    return sum + item.rating
  }, 0) / feedback.length

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average.toFixed(2)}</h4>
    </div>
  )
}

export default FeedbackStats
