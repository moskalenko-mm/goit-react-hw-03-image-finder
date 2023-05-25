import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handlePressESC);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePressESC);
  }

  handlePressESC = event => {
    if (event.code === 'Escape') this.props.closeModal();
  };

  handleClick = event => {
    if (event.currentTarget === event.target) this.props.closeModal();
  };

  render() {
    const { imgBigUrl, imgAlt } = this.props;
    return (
      <div className={css.Overlay} onClick={this.handleClick}>
        <div className={css.Modal}>
          <img src={imgBigUrl} alt={imgAlt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imgBigUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
