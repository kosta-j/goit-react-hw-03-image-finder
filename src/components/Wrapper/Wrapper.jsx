import { Component } from 'react';
import Button from '../Button/Button';
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
        <ImageGallery />
        <Button />
      </div>
    );
  }
}

export default Wrapper;
