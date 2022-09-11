import './Search.css'
import React, { useEffect, useState } from 'react'
import { Button, createTheme, Tab, Tabs, TextField, ThemeProvider } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import axios from 'axios'
import CustomPagination from '../../components/Pagination/CustomPagination'
import SingleMovie from '../../components/SingleMovie/SingleMovie'

const Search = () => {

  const [type, setType] = useState()
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [movie, setMovie] = useState()
  const [numPage, setNumpage] = useState()


  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${search}&page=${page}&include_adult=false
    `)
    setMovie(data.results)
    setNumpage(data.total_pages)
  }

  useEffect(() => {
    fetchSearch()
    //eslint-disable-next-line
  }, [type, page])

  return (
    <div>
      <span style={{ marginBottom: '5px' }} className='page-title'>Search</span>
      <ThemeProvider theme={darkTheme}>
        <div className='search'>
          <TextField
            style={{ flex: 1 }}
            className='searchBox'
            label='Search'
            variant='outlined'
            color='primary'
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={fetchSearch} variant="contained" style={{ marginLeft: "15px" }}> <SearchIcon /> </Button><br />
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor='primary'
          onChange={(event, newValue) => {
            setType(newValue)
            setPage(1)
          }}
        >{console.log(type)}
          <Tab style={{ width: "50%", color: 'white' }} label="Search Movies" />
          <Tab style={{ width: "50%", color: 'white' }} label="Search Tv Series" />
        </Tabs>
      </ThemeProvider>
      <div className='search-list'>
        {
          movie && movie.map((m) => (
            <SingleMovie
              key={m.id}
              id={m.id}
              title={m.name || m.title}
              date={m.first_air_date || m.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={m.vote_average}
              poster_path={m.poster_path} />))
        }
        {
          search && !movie && (type ? <h2>Tv Series not found! </h2> : <h2>Movie not found!</h2>)
        }
      </div>
      {numPage > 1 && (
        <CustomPagination
          setPage={setPage}
          numPage={numPage >= 50 ? 50 : numPage} />
      )}
    </div >
  )
}

export default Search