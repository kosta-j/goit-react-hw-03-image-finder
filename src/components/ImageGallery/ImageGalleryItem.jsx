import s from './ImageGallery.module.css';

function ImageGallery() {
  return (
    <li className={s.ImageGalleryItem}>
      Gallery Item
      {/* <img src="" alt="" className={s.ImageGalleryItemImage} /> */}
    </li>
  );
}

export default ImageGallery;
