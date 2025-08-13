import { render, fireEvent, screen } from '@testing-library/react';
import { MovieDetails } from './MovieDetails'

describe('Movie details component', () => {
  test('should render a message of missing values when props are been passed', () => {
    render(<MovieDetails />);
    const currentLabel = screen.getByText(/Either imageUrl, name, releaseYear, rating, duration, description were not provide, please provide them/);
    expect(currentLabel).toBeInTheDocument();
  });
  test('should render a message of missing values when props are passed empty', () => {
    render(<MovieDetails imageUrl="" name="" releaseYear="" rating="" duration="" description=""/>);
    const currentLabel = screen.getByText(/Either imageUrl, name, releaseYear, rating, duration, description were not provide, please provide them/);
    expect(currentLabel).toBeInTheDocument();
  });
  test('it should render correctly', () => {
    const mockProps = {
      imageUrl: 'poster.jpg',
      name: 'The Matrix',
      releaseYear: 1999,
      rating: 'R',
      duration: '2h 16m',
      description: 'A computer hacker learns about the true nature of his reality...',
    };

    render(<MovieDetails {...mockProps} />)
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    const releaseYearElement = screen.getByTestId('release-year');
    expect(releaseYearElement).toHaveTextContent(mockProps.releaseYear)
    const ratingElement = screen.getByTestId('rating');
    expect(ratingElement).toHaveTextContent(mockProps.rating)
    const durationElement = screen.getByTestId('duration');
    expect(durationElement).toHaveTextContent(mockProps.duration);
  })
   
})