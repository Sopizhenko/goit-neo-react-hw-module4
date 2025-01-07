import { useEffect, useState } from "react";
import { getImages } from "./services/unsplash";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

Modal.setAppElement("#root");

function App() {
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const searchQueryNormalized = searchQuery.trim();
    if (!searchQueryNormalized) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getImages(searchQueryNormalized, page);

        if (data !== undefined) {
          setImages((prevImages) => [...prevImages, ...data.results]);
          setTotal(data.total);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery, page]);

  const handleFormSubmit = (searchString) => {
    setPage(1);
    setImages([]);
    setSearchQuery(searchString);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const resetSearchQuery = () => {
    // We need to reset the search query to trigger useEffect
    // when user enters the same search query
    setSearchQuery("");
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} onChange={resetSearchQuery} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {loading && <Loader />}
      {images.length > 0 && images.length < total && !loading && (
        <LoadMoreBtn onClick={loadMore} />
      )}
      {selectedImage && showModal && (
        <ImageModal
          image={selectedImage}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default App;
