import { screen, fireEvent, render } from "@testing-library/react";
import { MovieTile } from "./MovieTile";
import { vi } from 'vitest';

describe('testing movie tile component', () => {
    const mockMovie = {
        id: 1,
        imageUrl: 'https://example.com/movie-poster.jpg',
        name: 'El Gran Lebowski',
        releaseYear: 1998,
        genres: ['Comedia', 'Crimen'],
    };
    test('should render properly wihtout onClick function', () => {
        render(<MovieTile movie={mockMovie}/>)
        expect(screen.getByRole('heading', {name: mockMovie.name})).toBeInTheDocument();
        expect(screen.getByText((mockMovie.releaseYear)))
        const movieGenres = screen.getByTestId('genres');
        expect(movieGenres).toBeInTheDocument(); 
        expect(movieGenres).toHaveTextContent(mockMovie.genres.join(', '))    
    })

    test('should call onClick function when clicking component', () => {
        const handlerClick = vi.fn();
        render(<MovieTile movie={mockMovie} onClick={handlerClick} />)
        const movieTile = screen.getByRole('heading', {name: mockMovie.name})
        //just to practice, not really necessary
        movieTile.closest('.movie-tile')
        fireEvent.click(movieTile)
        expect(handlerClick).toHaveBeenCalledTimes(1);
        expect(handlerClick).toHaveBeenCalledWith(mockMovie.id)
    })
});