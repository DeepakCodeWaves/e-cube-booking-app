import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const featured = [
  { id: 1, title: 'Avengers', image: '/avengers.jpg' },
  { id: 2, title: 'Interstellar', image: '/interstellar.jpg' },
  { id: 3, title: 'Inception', image: '/inception.jpg' },
];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {featured.map((movie) => (
        <div key={movie.id}>
          <img src={movie.image} alt={movie.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          <h2 style={{ textAlign: 'center', marginTop: '10px' }}>{movie.title}</h2>
        </div>
      ))}
    </Slider>
  );
}