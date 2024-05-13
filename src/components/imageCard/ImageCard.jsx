const ImageCard = ({ alt, src, openModal }) => {
  return (
    <div>
      <img onClick={()=>openModal(src)} src={src} alt={alt} width="300" height="100%" />
    </div>
  );
};

  export default ImageCard;