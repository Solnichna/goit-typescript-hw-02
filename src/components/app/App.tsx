import React, { useState, useEffect } from "react";
import { fetchImages } from "../api";
import SearchBar from "../searchBar/SearchBar";
import Loading from "../loader/Loader";
import Error from "../errorMessage/ErrorMessage";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn";
import ImageGallery from "../imageGallery/ImageGallery";
import ImageModal from "../imageModal/ImageModal";

interface Image {
  urls: {
    regular: string;
  };
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1); 

  useEffect(() => {
    if (searchInput !== "") {
      load(searchInput);
    }
  }, [searchInput]);

  const load = async (searchInput: string, page = 1) => { 
    try {
      if (page === 1) {
        setImages([]); 
      }
      setLoading(true);
      const resData = await fetchImages(searchInput, page);
      setImages(prevImages => [...prevImages, ...resData]); 
      onSearchSuccess(resData.length > 0);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const nextPage = currentPage + 1; 
      await load(searchInput, nextPage); 
      setCurrentPage(nextPage); 
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onSearchSuccess = (hasResults: boolean) => {
    setLoadMoreBtn(hasResults);
  };

  const handleSearchSubmit = (searchInput: string) => {
    setSearchInput(searchInput);
    setCurrentPage(1); 
  };

  const handleOpen = async (image: Image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <SearchBar onSearch={handleSearchSubmit} />
        {loading && <Loading />}
        {isError && <Error />}
        <ImageGallery images={images} openModal={handleOpen} />
        {loadMoreBtn && <LoadMoreBtn HandleClick={handleLoadMore} />}
        {selectedImage && selectedImage.urls.regular && (
          <ImageModal
            isOpen={isOpen}
            onRequestClose={handleClose}
            image={selectedImage}
          />
        )}
      </div>
    </>
  );
};

export default App;
