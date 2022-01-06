import React, { useContext, useEffect, useState } from 'react'
import Button from '../layout/Button'
import Card from '../layout/Card'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {
  const feedbackContext = useContext(FeedbackContext)
  const { addFeedback, current, editFeedback } = feedbackContext

  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setText(current.text)
    setRating(current.rating)
    setButtonDisabled(true)
  }, [current])

  const textChangeHandler = event => {
    if (event.target.value === '') {
      setButtonDisabled(true)
      setErrorMessage('')
    }

    if (event.target.value.trim().length < 10) {
      setButtonDisabled(true)
      setErrorMessage('Feedback should be more than 10 characters')
    } else {
      setButtonDisabled(false)
      setErrorMessage('')
    }

    setText(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (text.trim().length >= 10) {
      const newFeedback = { text, rating }

      if(Object.keys(current).length === 0) {
        addFeedback(newFeedback)
      } else {
        editFeedback(current.id, newFeedback)
      }

      setText('')
      setButtonDisabled(true)
      setErrorMessage('')
    }
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2>How would you rate your service with us?</h2>

        <RatingSelect onSelect={(rating) => setRating(rating)} />

        <div className='input-group'>
          <input type='text'
            placeholder='Enter your review'
            onChange={textChangeHandler}
            value={text} />
          <Button isDisabled={buttonDisabled}>Send</Button>
        </div>

        {errorMessage && <div className='message'>{errorMessage}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
