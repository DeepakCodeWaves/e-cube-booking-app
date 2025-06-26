import { useNavigate, useParams } from 'react-router-dom';
import '../style.css';

export default function MovieDetails() {
  const navigate = useNavigate();
  const { id, name, rate, type, language, imageUrl } = useParams();

  return (
    <div className="movie-details-container">
      <div className="movie-header">
        <h2>{name}</h2>
        <p className="release-date">Release Date: {type}</p>
      </div>

      <div className="movie-image">
        <img src={decodeURIComponent(imageUrl || '')} alt={name} />
      </div>

      <div className="movie-duration">
        <p>Duration: {language}</p>
      </div>

      <div className="movie-rating">
        <p>Rating: {rate}</p>
      </div>

      <div className="book-now">
        <button onClick={() => navigate(`/book/${id}`)}>Book Now</button>
      </div>
    </div>
  );
}