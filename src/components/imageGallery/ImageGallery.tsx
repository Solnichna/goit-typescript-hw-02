import ImageCard from "../imageCard/ImageCard";

interface ImageGalleryProps {
  images: {
    id: string;
    urls: {
      small: string;
    };
    alt_description: string;
  }[];
  openModal: (src: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className="image-gallery">
      {images.length > 0 &&
        images.map((image) => (
          <li key={image.id} className="image-gallery-item">
            <ImageCard src={image.urls.small} alt={image.alt_description} openModal={openModal} />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;