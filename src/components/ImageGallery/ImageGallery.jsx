import axios from 'axios';
import { Component } from 'react';
import { toast } from 'react-toastify';
import Button from '../Button/Button';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  static API_KEY = '22389180-c3e3825fb04f5ed43216d445d';
  static URL = 'https://pixabay.com/api/?q=';

  state = {
    hits: [],
    page: 1,
    loader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.resetState();
      this.loadImages();
    }

    if (prevState.page !== this.state.page) {
      this.loadMoreImages();
    }
  }

  loadImages = async () => {
    try {
      const { query } = this.props;
      const { page } = this.state;

      this.setState({ loader: true });

      const response = await axios.get(
        `${ImageGallery.URL}${query}&page=${page}&key=${ImageGallery.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      );

      this.setState({
        hits: response.data.hits,
      });

      if (response.data.hits.length === 0) {
        return toast.warn('Oops, such item has not found');
      }
    } catch (error) {
      console.log(error);
      return toast.error('Error while loading data. Try again later');
    } finally {
      this.setState({ loader: false });
    }
  };

  loadMoreImages = async () => {
    try {
      const { query } = this.props;
      const { page } = this.state;

      this.setState({ loader: true });

      const response = await axios.get(
        `${ImageGallery.URL}${query}&page=${page}&key=${ImageGallery.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      );

      this.setState(prevState => ({
        hits: [...prevState.hits, ...response.data.hits],
      }));

      if (response.data.hits.length === 0) {
        return toast.warn('Oops, such item has not found');
      }

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    } catch (error) {
      console.log(error);
      return toast.error('Error while loading data. Try again later');
    } finally {
      this.setState({ loader: false });
    }

    // axios
    //   .get(
    //     `${ImageGallery.URL}${query}&page=${page}&key=${ImageGallery.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    //   )
    //   .then(response => {
    //     this.setState(prevState => ({
    //       hits: [...prevState.hits, ...response.data.hits],
    //     }));
    //     if (response.data.hits.length === 0) {
    //       return toast.warn('Oops, such item has not found');
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  incrementPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  resetState = () => {
    this.setState({
      hits: [],
      page: 1,
    });
  };

  render() {
    const { hits, page, loader } = this.state;

    console.log(hits, `page: ${page}`);

    return (
      <main>
        {loader === true && <p>Loading...</p>}
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
        {hits.length >= 12 && <Button onClick={this.incrementPage} />}
      </main>
    );
  }
}

export default ImageGallery;
