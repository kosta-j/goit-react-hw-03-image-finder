import s from './ImageGallery.module.css';

function ImageGalleryItem(props) {
  const { src, alt, showModal } = props;
  return (
    <li className={s.item}>
      <img
        width="600"
        src={src}
        alt={alt}
        className={s.ImageGalleryItemImage}
        onClick={showModal}
      />
    </li>
  );
}

export default ImageGalleryItem;
