import './App.css'
import { Counter } from './Counter'
import { GenreSelect } from './GenreSelect'
import { SearchForm } from './SearchForm'

function App() {
  const genres = ['action', 'comedy', 'terror']
  return (
    <>
      <Counter initialValue={110}/>
      <SearchForm/>
      <GenreSelect
        genres={genres}
        currentGenreSelection='action'
      />
    </>
  )
}

export default App
