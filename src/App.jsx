import './App.css'
import { Counter } from './components/Counter'
import { GenreSelect } from './components/GenreSelect'
import { SearchForm } from './components/SearchForm'

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
