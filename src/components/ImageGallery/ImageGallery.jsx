import axios from 'axios';
import { Component } from 'react';
import Button from '../Button/Button';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  static API_KEY = '22389180-c3e3825fb04f5ed43216d445d';
  static URL = 'https://pixabay.com/api/?q=';

  state = {
    hits: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      axios
        .get(
          `${ImageGallery.URL}${this.props.query}&page=${this.state.page}&key=${ImageGallery.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(response => {
          this.setState({ hits: response.data.hits });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  incrementPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { hits } = this.state;

    console.log(hits);

    return (
      <main>
        <ul className={s.ImageGallery}>
          {hits.map(hit => (
            <ImageGalleryItem
              key={hit.id}
              className={s.ImageGalleryItem}
              src={hit.webformatURL}
              alt={hit.tags}
            />
          ))}
        </ul>
        {hits.length > 0 && <Button />}
      </main>
    );
  }
}

export default ImageGallery;
