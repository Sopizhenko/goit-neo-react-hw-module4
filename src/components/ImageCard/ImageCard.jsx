import Styles from "./ImageCard.module.css";

const ImageCard = ({ image, showImage }) => {
  return (
    <div className={Styles.imageCard}>
      <img
        className={Styles.imageCardImage}
        src={image.urls.thumb}
        alt={image.alt_description}
        onClick={() => showImage(image)}
      />
    </div>
  );
};

export default ImageCard;
