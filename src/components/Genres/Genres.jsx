import { Chip } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
    type,
  setPage
}) => {

  const API_KEY = import.meta.env.VITE_APIKEY;
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre])
    setGenres(genres.filter((g) => g.id !== genre.id))
    setPage(1)
  }

  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id))
    setGenres([...genres, genre])
    setPage(1)
  }

  const fetchGenres = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`
    )
    setGenres(data.genres)
  }
  console.log(genres);
  useEffect(() => {
    fetchGenres()

    return () => { //unmounting
      setGenres([])
    }
    //eslint-disable-next-line
  }, [])

  return (
    <div style={{ padding: "8px 0" }}>
      {
        selectedGenres && selectedGenres?.map((g) =>
          <Chip
            label={g.name}
            style={{ margin: 2 }}
            size='medium'
            color='primary'
            key={g.id}
            clickable
            onDelete={() => handleRemove(g)}
          />
        )
      }
      {
        genres && genres.map((g) =>
          <Chip
            label={g.name}
            style={{ margin: 2, color: "white" }}
            size='small'
            color='default'
            key={g.id}
            clickable
            onClick={() => handleAdd(g)}
          />
        )
      }
    </div>
  )
}

export default Genres