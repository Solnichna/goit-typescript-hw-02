import React, { useState, useEffect } from "react";
import { fetchImages } from "../api";
import SearchBar from "../searchBar/SearchBar";
import Loading from "../loader/Loader";
import Error from "../errorMessage/ErrorMessage";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn";
import ImageGallery from "../imageGallery/ImageGallery";
import ImageModal from "../imageModal/ImageModal";

const App: React.FC = () => {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  useEffect(() => {
    if (searchInput !== "") {
      load(searchInput);
    }
  }, [searchInput]);

  const load = async (searchInput: string) => {
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

  const onSearchSuccess = (hasResults: boolean) => {
    setLoadMoreBtn(hasResults);
  };

  const handleSearchSubmit = (searchInput: string) => {
    setSearchInput(searchInput);
  };

  const handleOpen = async (image: any) => {
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
        {selectedImage && (
          <ImageModal
            isOpen={isOpen}
            onRequestClose={handleClose}
            imageUrl={selectedImage.urls.regular}
          />
        )}
      </div>
    </>
  );
};

export default App;
