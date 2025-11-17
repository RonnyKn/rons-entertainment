import './Series.css'
import React, { useEffect, useState } from 'react'
import CustomPagination from '../../components/Pagination/CustomPagination'
import SingleMovie from '../../components/SingleMovie/SingleMovie'
import Genres from '../../components/Genres/Genres'
import axios from 'axios'
import useGenre from '../../CustomHooks/useGenre'

const Series = () => {

  const [movie, setMovie] = useState([])
  const [page, setPage] = useState(1)
  const [numPage, setNumPage] = useState()
  const [selectedGenres, setSelectedGenres] = useState([])
  const [genres, setGenres] = useState([])
  const genreURL = useGenre(selectedGenres)
  const API_KEY = import.meta.env.VITE_APIKEY;
  const DISCOVER_TV = import.meta.env.VITE_APP_DISCOVER_TV;

  const fetchSeries = async () => {
    const { data } = await axios.get(`
    ${DISCOVER_TV}${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}
    `)
    setMovie(data.results)
    setNumPage(data.total_pages)
  }
  useEffect(() => {
    fetchSeries()
    //eslint-disable-next-line
  }, [page, genreURL])

  return (
    <div>
      <span className='page-title'>Discover Series</span>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setNumPage={setNumPage}
        setPage={setPage}
      />

      <div className='series'>
        {
          movie !== 0 ? movie.map((m) => {
            return (
              <SingleMovie key={m.id}
                id={m.id}
                title={m.name || m.title}
                date={m.first_air_date || m.release_date}
                media_type="tv"
                vote_average={m.vote_average}
                poster_path={m.poster_path}
                overview={m.overview}
              />
            )
          }) : <h1>Tv Series not found</h1>
        }
      </div>
      {numPage > 1 && (
        <CustomPagination
          setPage={setPage}
          numPage={numPage >= 50 ? 50 : numPage} />
      )}
    </div>)
}

export default Series