import React, { useState, useEffect } from 'react';

export const SearchForm = ({ initialSearchQuery = '', onSearch }) => {
    const [query, setQuery] = useState(initialSearchQuery);

    useEffect(() => {
        setQuery(initialSearchQuery);
    }, [initialSearchQuery]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault(); 
        if (onSearch) {
            onSearch(query);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (onSearch) {
                onSearch(query);
            }
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                name="query"
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Enter search query..."
            />
            <button type="submit">Search</button>
        </form>
    );
};