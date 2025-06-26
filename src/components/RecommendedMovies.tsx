import "../style.css";

const recommended = [
  { id: 1, title: "Dune 2", image: "/dune2.jpg" },
  { id: 2, title: "Oppenheimer", image: "/oppenheimer.jpg" },
  { id: 3, title: "Inception", image: "/inception.jpg" },
];

export default function RecommendedMovies() {
  return (
    <section className="recommended">
      <h3>Recommended For You</h3>
      <div className="movie-grid">
        {recommended.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
