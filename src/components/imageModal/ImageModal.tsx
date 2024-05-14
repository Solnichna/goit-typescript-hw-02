import React from "react";
import Modal from "react-modal";

interface Image {
  urls: {
    regular: string;
  };
  alt_description: string;
}

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        {image && (
          <img
            className="image-modal-image"
            src={image.urls.regular}
            alt={image.alt_description}
          />
        )}
      </Modal>
    </>
  );
};

export default ImageModal;
