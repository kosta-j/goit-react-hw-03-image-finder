import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';

function ImageGallery() {
  return (
    <ul className={s.ImageGallery}>
      Gallery:
      <ImageGalleryItem />
    </ul>
  );
}

export default ImageGallery;
