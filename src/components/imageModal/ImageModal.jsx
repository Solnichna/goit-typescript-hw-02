
import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
    >
      <button onClick={onRequestClose}>Close</button>
      <img src={imageUrl} alt="Modal Image" />
    </Modal>
  );
};

export default ImageModal;
