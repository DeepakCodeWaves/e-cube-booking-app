import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import UpcomingMovies from "../features/upcomingMovies/UpcomingMovies";
import LatestMovies from "../features/latestMovies/LatestMovies";
import BookTicket from "../pages/BookTicket";
import BookingSummary from "../pages/BookingSummary";
import NearByEvents from "../features/nearbyEvents.ts/NearbyEvents";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/movies/:id/:name/:rate/:type/:language/:imageUrl"
        element={<MovieDetails />}
      />
      <Route path="/latest" element={<LatestMovies />} />
      <Route path="/upcoming" element={<UpcomingMovies />} />
      <Route path="/book/:movieId" element={<BookTicket />} />
      <Route path="/booking/summary" element={<BookingSummary />} />
      <Route path="/events" element={<NearByEvents />} />
    </Routes>
  );
}
