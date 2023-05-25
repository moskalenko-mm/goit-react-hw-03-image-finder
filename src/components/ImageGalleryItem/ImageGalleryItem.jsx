import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imgUrl, imgBigUrl, imgAlt, openModal }) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => openModal(imgBigUrl, imgAlt)}
    >
      <img src={imgUrl} alt={imgAlt} className={css.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgBigUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
