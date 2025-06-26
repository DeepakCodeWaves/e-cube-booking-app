import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../style.css';

export default function Navbar() {
  // const [searchTerm, setSearchTerm] = useState('');
  // const navigate = useNavigate();

  // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (searchTerm.trim()) {
  //     navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
  //   }
  // };

  return (
    <nav className="navbar">
      <div className="nav-left">
         <Link to="/">Home</Link>
        <Link to="/latest">Latest Movies</Link>
        <Link to="/upcoming">Upcoming Movies</Link>
        <Link to="/events">Nearby Events</Link>
      </div>
      <form className="nav-search" 
      // onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="Search movies..."
        />
        <button type="submit">🔍</button>
      </form>
    </nav>
  );
}
