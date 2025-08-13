import './SortControl.css';
import { useEffect, useState } from 'react';

export const SortControl = ({ currentSelection = 'title', onSortChange }) => {
  const [selection, setSelection] = useState('title')
  useEffect(() => {
    if (Object.keys(options).includes(currentSelection)) {
      setSelection(currentSelection)
    }
  }, [currentSelection])
  
  const options = {
    releaseDate: 'Release Date',
    title: 'Title'
  }
  
  const handleChange = (event) => {
    //remove this if
    if (!Object.keys(options).includes(event.target.value)) {
      return
    }
    setSelection(event.target.value)
    if (onSortChange) {
      onSortChange(event.target.value);
    }
  };

  return (
    <div className="sort-control-container">
      <label htmlFor="sort-select" className="sort-label">Sort by:</label>
      <select
        id="sort-select"
        className="sort-select"
        value={selection}
        onChange={handleChange}  
      >
        <option value="releaseDate">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

