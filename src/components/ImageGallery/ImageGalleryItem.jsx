import s from './ImageGallery.module.css';

function ImageGalleryItem(props) {
  const { webformatURL, tags } = props.hit;
  const { showModal } = props;
  // console.log(props.hit);

  return (
    <li className={s.item}>
      <img
        width="600"
        src={webformatURL}
        alt={tags}
        className={s.ImageGalleryItemImage}
        onClick={() => showModal(props.hit)}
      />
    </li>
  );
}

export default ImageGalleryItem;
