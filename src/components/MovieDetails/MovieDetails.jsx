  import './MovieDetails.css';

  export const MovieDetails = ({ imageUrl, name, releaseYear, rating, duration, description }) => {
    let renderContent = <p>Either imageUrl, name, releaseYear, rating, duration, description were not provide,
      please provide them</p>
    if (!imageUrl || !name || !releaseYear || !rating || !duration || !description) {
      return renderContent;
    }
    return (
      <div className="movie-details-container">
        <div className="movie-poster">
          <img src={imageUrl} alt={`${name} Poster`} />
        </div>
        <div className="movie-info">
          <h2>{name}</h2>
          <p data-testid='release-year'><strong>Release Year:</strong> {releaseYear}</p>
          <p data-testid='rating'><strong>Rating:</strong> {rating}</p>
          <p data-testid='duration'><strong>Duration:</strong> {duration}</p>
          <p className="movie-description">{description}</p>
        </div>
      </div>
    );
  };
