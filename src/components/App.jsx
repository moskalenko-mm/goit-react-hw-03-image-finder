import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getPhoto } from '../services/galleryApi';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { Container } from './App.styled';

class App extends Component {
  state = {
    userRequest: '',
    page: 1,
    photos: [],
    isLoading: false,
    error: null,
    isEmpty: false,
    showBtn: false,
    showModal: false,
    imgBigUrl: '',
    imgAlt: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { userRequest, page } = this.state;

    if (prevState.userRequest !== userRequest || prevState.page !== page) {
      this.setState({ isLoading: true });
      getPhoto(userRequest, page)
        .then(({ hits, totalHits }) => {
          if (!hits.length) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            photos: [...prevState.photos, ...hits],
            showBtn: page < Math.ceil(totalHits / 12),
          }));
        })
        .catch(error => {
          this.setState({ error });
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  openModal = (imgBigUrl, imgAlt) => {
    this.setState({ showModal: true, imgBigUrl, imgAlt });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleSubmit = userRequest => {
    this.setState({
      userRequest,
      page: 1,
      photos: [],
      isEmpty: false,
      showBtn: false,
      error: null,
      showModal: false,
      imgBigUrl: '',
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const {
      photos,
      isLoading,
      error,
      isEmpty,
      showBtn,
      showModal,
      imgBigUrl,
      imgAlt,
    } = this.state;

    return (
      <Container>
        <Searchbar handleSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {isEmpty && <h2>We have no images for this request.</h2>}
        <ImageGallery photos={photos} openModal={this.openModal} />
        {showBtn && <Button handleLoadMore={this.handleLoadMore} />}
        {error && <h2>{error.message} </h2>}
        {showModal && (
          <Modal
            imgAlt={imgAlt}
            imgBigUrl={imgBigUrl}
            closeModal={this.closeModal}
          />
        )}
      </Container>
    );
  }
}

export default App;
