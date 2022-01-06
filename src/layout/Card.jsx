import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ reverse, children }) => {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: false
}

Card.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Card
