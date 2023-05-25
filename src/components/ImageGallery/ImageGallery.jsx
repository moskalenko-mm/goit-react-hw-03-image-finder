import PropTypes from 'prop-types';
import css from '../ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {photos.map(photo => {
        return (
          <ImageGalleryItem
            key={photo.id}
            imgUrl={photo.webformatURL}
            imgBigUrl={photo.largeImageURL}
            imgAlt={photo.tags}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
