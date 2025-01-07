import { useEffect, useState } from "react";
import { getImages } from "./services/unsplash";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";

Modal.setAppElement('#root');

function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchQueryNormalized = searchQuery.trim();
    if (!searchQueryNormalized) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getImages(searchQueryNormalized, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        setError("Something went wrong. Please try again later.");
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
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
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
