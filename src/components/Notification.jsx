/* eslint-disable linebreak-style */
import PropTypes from 'prop-types'

const Notification = ({ message, type }) => {
  if (message === null) {
    return null
  }

  return <div className={type === 'error' ? 'error' : 'success'}>{message}</div>
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Notification
