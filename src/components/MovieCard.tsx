import { useNavigate } from "react-router-dom";
import type { Movie } from "../features/latestMovies/latestMoviesSlice";
import "../style.css";

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className="movie-card"
      onClick={() =>
        navigate(
          `/movies/${movie._id}/${movie.name}/${movie.rate}/${movie.type}/${
            movie.language
          }/${encodeURIComponent(movie.imageUrl)}`
        )
      }
    >
      <img src={movie.imageUrl} alt={movie.name} />
      <h3>{movie.name}</h3>
      <button onClick={() => navigate(`/book/${movie._id}`)}>Book</button>
    </div>
  );
}
