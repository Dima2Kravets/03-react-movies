import css from "./MovieGrid.module.css"
import type { Movie } from "../../types/movie"

interface MovieGridProps{
  movies: Movie[]
  onSelectMovie: (movie: Movie) => void;
}
export default function MovieGrid({ movies, onSelectMovie }: MovieGridProps) {
const handleClick = (movie: Movie) => {
  onSelectMovie(movie);
};
  return (
    <ul className={css.grid}>
      {movies.map((movie) => {
        const srcFinal= `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        
        return (<li key={movie.id} onClick={() => handleClick(movie)}>
          <div className={css.card}>
            <img
              className={css.image}
              src={srcFinal}
              alt={movie.title}
              loading="lazy"
            />
          <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>)}
        
        )}
</ul>)
} 
