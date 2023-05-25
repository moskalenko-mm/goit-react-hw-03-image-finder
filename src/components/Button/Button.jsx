// import PropTypes from 'prop-types';
import css from '../Button/Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ handleLoadMore }) => {
  return (
    <button type="button" className={css.Button} onClick={handleLoadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default Button;
