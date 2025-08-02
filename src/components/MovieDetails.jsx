import './MovieDetails.css';

const MovieDetails = ({ imageUrl, name, releaseYear, rating, duration, description }) => {
  return (
    <div className="movie-details-container">
      <div className="movie-poster">
        <img src={imageUrl} alt={`${name} Poster`} />
      </div>
      <div className="movie-info">
        <h2>{name}</h2>
        <p><strong>Release Year:</strong> {releaseYear}</p>
        <p><strong>Rating:</strong> {rating}</p>
        <p><strong>Duration:</strong> {duration}</p>
        <p className="movie-description">{description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;