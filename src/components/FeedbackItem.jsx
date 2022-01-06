import React, { useContext } from 'react'
import Card from '../layout/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({ data }) => {
  const feedbackContext = useContext(FeedbackContext)
  const { deleteFeedback, setCurrent } = feedbackContext

  return (
    <Card>
      <div className='num-display'>{data.rating}</div>
      <button className="close"
        onClick={() => deleteFeedback(data.id)}>
        <FaTimes color='purple' />
      </button>
      <button className="edit"
        onClick={() => setCurrent(data)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{data.text}</div>
    </Card>
  )
}

FeedbackItem.defaultProps = {
  data: {},
}

FeedbackItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FeedbackItem
