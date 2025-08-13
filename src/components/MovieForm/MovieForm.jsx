
import "./MovieForm.css";

export const MovieForm = ({ initialMovie = {}, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    onSubmit(formData);
  };

  const handleReset = (event) => {
    event.preventDefault();
    event.target.closest("form").reset();
  };

  return (
    <form role="form" className="movie-form" onSubmit={handleSubmit}>
      <h2>ADD MOVIE</h2>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Moana"
            defaultValue={initialMovie.title || ""}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="releaseDate">Release Date</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            defaultValue={initialMovie.releaseDate || ""}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="movieUrl">Movie URL</label>
          <input
            type="url"
            id="movieUrl"
            name="movieUrl"
            placeholder="https://"
            defaultValue={initialMovie.movieUrl || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            step="0.1"
            min="0"
            max="10"
            placeholder="7.8"
            defaultValue={initialMovie.rating || ""}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select id="genre" name="genre" defaultValue={initialMovie.genre || ""}>
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="runtime">Runtime</label>
          <input
            type="number"
            id="runtime"
            name="runtime"
            placeholder="minutes"
            defaultValue={initialMovie.runtime || ""}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="overview">Overview</label>
        <textarea
          id="overview"
          name="overview"
          placeholder="Movie description"
          defaultValue={initialMovie.overview || ""}
        ></textarea>
      </div>

      <div className="form-buttons">
        <button type="reset" className="reset-button" onClick={handleReset}>
          RESET
        </button>
        <button type="submit" className="submit-button">
          SUBMIT
        </button>
      </div>
    </form>
  );
};

