import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import "./App.css";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "BahAL1U6qGzxg3cR9jdqD-OUW2Qhf7o1TXo_LVS3rJc";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL, {
        params: {
          query,
          page,
          per_page: 12,
          client_id: ACCESS_KEY,
        },
      });
      setImages((prev) => [...prev, ...response.data.results]);
    } catch (error) {
      setError("Failed to load images.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {loading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={() => setPage(page + 1)} />}
      {selectedImage && (
        <ImageModal
          isOpen={true}
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default App;
