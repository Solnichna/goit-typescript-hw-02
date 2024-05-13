import Modal from "react-modal";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, imageUrl }) => {
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