import React from "react";
import Styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      {images.length === 0 ? (
        <p>No images found</p>
      ) : (
        <ul className={Styles.imageGallery}>
          {images.map((image) => (
            <li key={image.id} className={Styles.imageGalleryItem}>
              <ImageCard image={image} showImage={openModal} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ImageGallery;
