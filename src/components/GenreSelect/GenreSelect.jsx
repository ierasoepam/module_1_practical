import { useState } from 'react'

export const GenreSelect = ({genres, currentGenreSelection, onSelect}) => {
    const [genre, setGenre] = useState(currentGenreSelection)

    const handleGenreChange = (e) => {
        setGenre(e.target.value)
        if (onSelect) {
            onSelect(e.target.value)
        }
    }
    const handleSubmit = () => {
        return
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Pick the movie genra</label>
            <select 
                value={genre}
                onChange={handleGenreChange}
                name='genraSelect'
            >
                {genres.map((currentGenre) => {
                    return (
                        <option key={currentGenre} value={currentGenre}>{currentGenre}</option>
                    )
                })}
            </select>
        </form>
    )
}