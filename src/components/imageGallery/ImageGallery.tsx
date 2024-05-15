import ImageCard from "../imageCard/ImageCard";

export interface Image {
  urls: {
    regular: string;
    small: string;
  };
  alt: string;
}

interface ImageGalleryProps {
  images: {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
  }[];
  openModal: (src: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className="image-gallery">
      {images.length > 0 &&
        images.map((image) => (
          <li key={image.id} className="image-gallery-item">
            <ImageCard
              src={{
                urls: { regular: image.urls.regular, small: image.urls.small },
                alt: image.alt_description,
              }}
              alt={image.alt_description}
              openModal={openModal}
            />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;