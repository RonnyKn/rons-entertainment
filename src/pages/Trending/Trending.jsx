import './Trending.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleMovie from '../../components/SingleMovie/SingleMovie'
import CustomPagination from '../../components/Pagination/CustomPagination'

const Trending = () => {
  const [page, setPage] = useState(1)
  const [movie, setMovie] = useState([])
  const API_KEY = import.meta.env.VITE_APIKEY;
  const APP_TRENDING = import.meta.env.VITE_APP_TRENDING;

  const fetchTrending = async () => {
    const { data } = await axios.get(`${APP_TRENDING}${API_KEY}&page=${page}`)
    setMovie(data.results)
  }
  useEffect(() => {
    fetchTrending()
    //eslint-disable-next-line
  }, [page])

  return (
    <div>
      <span className='page-title'>Trending Today</span>
      <div className='trending'>
        {
          movie && movie.map((m) => (
            <SingleMovie
              key={m.id}
              title={m.name || m.title}
              date={m.first_air_date || m.release_date}
              {...m} />))
        }
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  )
}

export default Trending