import { useState, useEffect } from 'react';
import "./App.module.css";

import { fetchImages } from "./api";
import SearchBar from "./searchBar/SearchBar";
import Loading from "./loader/Loader";
import Error from "../components/errorMessage/ErrorMessage";
import LoadMoreBtn from "../components/loadMoreBtn/LoadMoreBtn";
import ImageGallery from "./imageGallery/ImageGallery";
import ImageModal from "../components/imageModal/ImageModal"; 

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState(null);

  useEffect(() => {
    if (searchInput !== "") {
      load(searchInput);
    }
  }, [searchInput]); 

  const load = async (searchInput) => {
    try {
      setImages([]);
      setLoading(true);
      const resData = await fetchImages(searchInput);
      setImages(resData);
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
      const nextPage = Math.ceil(images.length / 10) + 1;
      const resData = await fetchImages(searchInput, nextPage);
      setImages([...images, ...resData]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onSearchSuccess = (hasResults) => {
    setLoadMoreBtn(hasResults);
  };

  const handleSearchSubmit = (searchInput) => {
    setSearchInput(searchInput);
  };

  const handleOpen = async (image) => {
    setSelectedImages(image);
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
        {selectedImages && (
          <ImageModal
            isOpen={isOpen}
            onRequestClose={handleClose}
            image={selectedImages}
          />
        )}
      </div>
    </>
  );
}

export default App;
