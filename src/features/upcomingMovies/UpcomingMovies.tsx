import { useEffect } from "react";
import { fetchupcomingMovies } from "./upcomingMoviesSlice";
import MovieCard from "../../components/MovieCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "../../style.css";
import Navbar from "../../components/Navbar";
export default function UpcomingMovies() {
  const dispatch = useAppDispatch();
  const { movies, loading, error } = useAppSelector(
    (state) => state.upcomingMovies
  );

  useEffect(() => {
    dispatch(fetchupcomingMovies());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="movie-list">
      <Navbar />
      <div className="movie-slider">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
