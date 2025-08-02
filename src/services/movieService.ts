import axios from "axios";
import type { Movie } from "../type/movie"
interface MoviesHttpResponse {
  results: Movie[];
}
const myKey = import.meta.env.VITE_TMDB_TOKEN;
export const fetchMovies = async (movie: string): Promise<Movie[]> => {
  const response = await axios.get<MoviesHttpResponse>(
    `https://api.themoviedb.org/3/search/movie?query=${movie}`, {
      headers: {
        Authorization: `Bearer ${myKey}`,
      }
  }
  );
  return response.data.results;
};