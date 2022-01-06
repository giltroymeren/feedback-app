import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from '../layout/Spinner'

const FeedbackList = () => {
  const feedbackContext = useContext(FeedbackContext)
  const { feedback, isLoading } = feedbackContext

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback available</p>
  }

  return isLoading ? <Spinner /> : (
    <div className='feedback-list'>
      {feedback.map(item => (
        <FeedbackItem key={item.id}
          data={item} />
      ))}
    </div>
  )
}

export default FeedbackList
