import './SortControl.css';

const SortControl = ({ currentSelection, onSortChange }) => {
  const handleChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="sort-control-container">
      <label htmlFor="sort-select" className="sort-label">Sort by:</label>
      <select
        id="sort-select"
        className="sort-select"
        value={currentSelection}
        onChange={handleChange}  
      >
        <option value="releaseDate">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortControl;