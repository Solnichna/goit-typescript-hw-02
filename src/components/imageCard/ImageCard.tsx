interface ImageCardProps {
  alt: string;
  src: string;
  openModal: (src: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ alt, src, openModal }) => {
  return (
    <div>
      <img onClick={() => openModal(src)} src={src} alt={alt} width="300" height="100%" />
    </div>
  );
};

export default ImageCard;