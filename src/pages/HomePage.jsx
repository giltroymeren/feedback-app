import React from 'react'
import FeedbackList from '../components/FeedbackList'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackForm from '../components/FeedbackForm'

const HomePage = () => {

  return (
    <>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </>
  )
}

export default HomePage
