import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { SearchForm } from './SearchForm';

describe('SearchForm', () => {

  it('should render an input with the value equal to the initial value passed in props', () => {
    const initialQuery = 'initial search query';
    render(<SearchForm initialSearchQuery={initialQuery} />);

    const inputElement = screen.getByDisplayValue(initialQuery);

    expect(inputElement).toBeInTheDocument();
  });

  it('should call the onSearch prop with the correct value after typing to the input and clicking the Submit button', () => {
    const onSearchMock = vi.fn();
    const query = 'new search query';

    render(<SearchForm onSearch={onSearchMock} />);

    const inputElement = screen.getByPlaceholderText('Enter search query...');
    const buttonElement = screen.getByRole('button', { name: 'Search' });

    fireEvent.change(inputElement, { target: { value: query } });
    fireEvent.click(buttonElement);

    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith(query);
  });

  it('should call the onSearch prop with the correct value after typing to the input and pressing the Enter key', () => {
    const onSearchMock = vi.fn();
    const query = 'keyboard search';

    render(<SearchForm onSearch={onSearchMock} />);

    const inputElement = screen.getByPlaceholderText('Enter search query...');

    fireEvent.change(inputElement, { target: { value: query } });
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });

    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith(query);
  });
});