import './Movies.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CustomPagination from '../../components/Pagination/CustomPagination'
import SingleMovie from '../../components/SingleMovie/SingleMovie'
import Genres from '../../components/Genres/Genres'
import useGenre from '../../CustomHooks/useGenre'

const Movies = () => {

  const [page, setPage] = useState(1)
  const [movie, setMovie] = useState([])
  const [numPage, setNumPage] = useState()
  const [selectedGenres, setSelectedGenres] = useState([])
  const [genres, setGenres] = useState([])
  const genreURL = useGenre(selectedGenres)
  const API_KEY = import.meta.env.VITE_APIKEY;
  const APP_DISCOVER_TV = import.meta.env.VITE_APP_DISCOVER_TV;

  const fetchMovies = async () => {
    const { data } = await axios.get(`${APP_DISCOVER_TV}${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`)
    setMovie(data.results)
    setNumPage(data.total_pages)
  }

  useEffect(() => {
    fetchMovies()
    //eslint-disable-next-line
  }, [page, genreURL])

  return (
    <div>
      <span className='page-title'>Discover Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setNumPage={setNumPage}
        setPage={setPage}
      />
      <div className='movies'>
        {
          movie !== 0 ? movie.map((m) => {
            return (
              <SingleMovie key={m.id}
                id={m.id}
                title={m.name || m.title}
                date={m.first_air_date || m.release_date}
                media_type="Movie"
                vote_average={m.vote_average}
                poster_path={m.poster_path}
                overview={m.overview}
              />
            )
          }) : <h1>Movies not found</h1>
        }
      </div>
      {numPage > 1 && (
        <CustomPagination
          setPage={setPage}
          numPage={numPage >= 50 ? 50 : numPage} />
      )}
    </div>
  )
}

export default Movies