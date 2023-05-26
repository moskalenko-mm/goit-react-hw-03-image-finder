import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
  return <h2>{message}</h2>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
