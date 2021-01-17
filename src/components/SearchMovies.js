import React, { useEffect, useState } from 'react';
// antd components
import { Alert, Row } from 'antd';
// core components
import SearchBar from 'components/SearchBar.js'
import MovieCard from 'components/MovieCard.js'

const API_KEY = '99e81d46';

export default function SearchMovies({ nominationList, addNom, removeNom, disableAll, setDisableAll }) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('avengers');
  
  useEffect(() => {
    setData(null);
    setLoading(true);
    setError(null);

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${query}`)
    .then(resp => resp)
    .then(resp => resp.json())
    .then(response => {
      if (response.Response === 'False') {
        setError(response.Error);
      } else {
        setData(response.Search);
      }
      setLoading(false);
    })
    .catch(({ message }) => {
      setError(message);
      setLoading(false);
    })
  }, [query]);

  return (
    <div>
      <SearchBar searchHandler={ setQuery } />
      <Row gutter={ 16 } type='flex'>
        { loading && 'LOADING ..' }
        { error !== null && 
          <Alert 
            message={ error === 'Incorrect IMDb ID.' ? 'No title. Please enter a title.' : error } 
            type='error' 
          />
        }
        { data !== null && data.length > 0 && data.map((movieData, index) => (
          <MovieCard 
            { ...movieData } 
            nominationList={ nominationList } 
            addNom={ addNom } 
            removeNom={ removeNom }
            setDisableAll={ setDisableAll } 
            disableAll={ disableAll }
          />))
        }
      </Row>
    </div>
  );
}