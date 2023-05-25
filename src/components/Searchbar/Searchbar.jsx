import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  state = { userRequest: '' };

  handleChange = event => {
    this.setState({ userRequest: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (!this.state.userRequest) {
      Notify.failure('Search field is empty!!!');
      return;
    }
    this.props.handleSubmit(this.state.userRequest);
    this.setState({ userRequest: '' });
  };

  render() {
    return (
      <header className={css.Searchbar} onSubmit={this.onSubmit}>
        <form className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
