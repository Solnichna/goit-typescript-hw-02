interface LoadMoreBtnProps {
  HandleClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ HandleClick }) => {
  return (
    <div className="container-load-more-btn">
      <button onClick={HandleClick} type="button" className="load-more-btn">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;