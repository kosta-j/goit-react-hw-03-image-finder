import s from './ImageGallery.module.css';

function ImageGalleryItem(props) {
  const { src, alt } = props;
  return (
    <li className={s.item}>
      {/* {console.log({ hit })} */}
      <img src={src} alt={alt} className={s.ImageGalleryItemImage} />
    </li>
  );
}

export default ImageGalleryItem;
