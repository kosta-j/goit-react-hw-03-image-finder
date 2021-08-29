import { Component } from 'react';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../Searchbar/Searchbar';
import s from './Wrapper.module.css';

class Wrapper extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <div className={s.wrapper}>
        <Searchbar />
        <ImageGallery />
        <Button />
      </div>
    );
  }
}

export default Wrapper;
