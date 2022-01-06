import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ classes, type, isDisabled, children }) => {
  return (
    <button type={type}
      disabled={isDisabled}
      className={`btn ${classes}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  classes: 'btn-primary',
  type: 'submit',
  isDisabled: true,
}

Button.propTypes = {
  classes: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Button
