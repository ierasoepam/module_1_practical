import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { GenreSelect } from './GenreSelect';

describe('GenreSelect', () => {

  const allGenres = ['Action', 'Comedy', 'Drama', 'Horror'];
  const initialSelection = 'Comedy';

  it('should render all genres passed in props', () => {
    render(<GenreSelect genres={allGenres} currentGenreSelection={initialSelection} onSelect={() => {}} />);
    
    allGenres.forEach(genre => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  it('should highlight a selected genre passed in props', () => {
    render(<GenreSelect genres={allGenres} currentGenreSelection={initialSelection} onSelect={() => {}} />);
    
    const selectElement = screen.getByDisplayValue(initialSelection);
    expect(selectElement).toBeInTheDocument();
  });

  it('should call the onSelect callback with the correct genre when a new genre is selected', () => {
    const onSelectMock = vi.fn();
    render(<GenreSelect genres={allGenres} currentGenreSelection={initialSelection} onSelect={onSelectMock} />);
    
    const selectElement = screen.getByRole('combobox');
    
    fireEvent.change(selectElement, { target: { value: 'Drama' } });
    
    expect(onSelectMock).toHaveBeenCalledTimes(1);
    expect(onSelectMock).toHaveBeenCalledWith('Drama');
  });

});
