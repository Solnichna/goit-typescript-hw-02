import { Image } from "../imageGallery/ImageGallery.js";
interface ImageCardProps {
  alt: string;
  src: Image;
  openModal: (src: Image) => void;
}
const ImageCard: React.FC<ImageCardProps> = ({ alt, src, openModal }) => {
  return (
    <div>
      <img
        onClick={() => openModal(src)}
        src={src.urls.small}
        alt={alt}
        width="300"
        height="100%"
      />
    </div>
  );
};
export default ImageCard;