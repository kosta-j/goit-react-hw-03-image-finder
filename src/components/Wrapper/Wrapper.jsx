import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../Searchbar/Searchbar';
import s from './Wrapper.module.css';

class Wrapper extends Component {
  state = {
    query: '',
  };

  updateQuery = async text => {
    console.log(`wait`);

    await this.setState({ query: text });
    console.log(`state updated - ${text}`);
  };

  render() {
    return (
      <div className={s.wrapper}>
        <Searchbar onSubmit={this.updateQuery} />
        <ImageGallery query={this.state.query} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default Wrapper;
