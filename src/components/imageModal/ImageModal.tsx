import React from "react";
import Modal from "react-modal";

import { Image } from "../imageGallery/ImageGallery.js";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        {image.urls.regular && (
          <img
            className="image-modal-image"
            src={image.urls.regular}
            alt={image.alt}
          />
        )}
      </Modal>
    </>
  );
};

export default ImageModal;