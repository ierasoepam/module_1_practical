import './App.css'
import { Counter } from './components/Counter/Counter'
import { GenreSelect } from './components/GenreSelect/GenreSelect'
import { SearchForm } from './components/SearchForm/SearchForm'
import { MovieTile } from './components/MovieTile/MovieTile'
import { SortControl } from './components/SortControl/SortControl'
import { Dialog } from './components/Dialog/Dialog'
import { MovieForm } from './components/MovieForm/MovieForm'


function App() {
  const genres = ['action', 'comedy', 'terror']
  const movie = {
    imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/470d3d79188215.5cbb96fd0abb4.jpg',
    name: 'Avengers End Game',
    releaseYear: '1998',
    genres: ['accion', 'sci-fi']
  }
  return (
    <>
      <MovieForm/>
      <Dialog/>
      <SortControl
        currentSelection='title'
      />
      <Counter initialValue={110}/>
      <SearchForm/>
      <GenreSelect
        genres={genres}
        currentGenreSelection='action'
      />
      <MovieTile
        movie={movie} 
        onClick={() => {}}
      />
      
    </>
  )
}

export default App
