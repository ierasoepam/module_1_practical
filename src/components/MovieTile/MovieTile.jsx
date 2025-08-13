import './MovieTile.css';

export const MovieTile = ({ movie, onClick }) => {
  const { imageUrl, name, releaseYear, genres } = movie;

  const handleTileClick = () => {
    if (onClick) {
      onClick(movie.id);
    }
  };

  return (
    <div className="movie-tile" onClick={handleTileClick}>
      <div className="movie-tile-image-container">
        <img src={imageUrl} alt={name} className="movie-tile-image" />
      </div>
      <div className="movie-tile-info">
        <div className='movie-name-genre'>
            <h3 name='movie-title' className="movie-tile-name">{name}</h3>
            <p data-testid='genres' className="movie-tile-genres">{genres.join(', ')}</p>
        </div>
        <span className="movie-tile-year">{releaseYear}</span>

      </div>
    </div>
  );
};