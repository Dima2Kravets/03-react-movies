import css from "./App.module.css";
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";
import { useState } from "react";
import { fetchMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";

const notify = () => toast.error('No movies found for your request.');
export default function App() {
 const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleSearch = async (movie: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await fetchMovies(movie);
      setMovies(data);
        if (data.length === 0) {
        notify();
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);


    return (
      <div className={css.app} >
        
        <SearchBar onSubmit={handleSearch} />
        <Toaster/>
        <MovieGrid movies={movies} onSelectMovie={handleSelectMovie} />
        {isModalOpen && selectedMovie && (
  <MovieModal movie={selectedMovie} onClose={closeModal} />
)}
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
    </div>
  );
}