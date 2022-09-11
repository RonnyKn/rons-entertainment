import './SingleMovie.css'
import React from 'react'
import { img_300, unavailable } from '../../config/Config'
import { Badge } from '@mui/material'
import TransitionsModal from '../Modal/Modal'




const SingleMovie = ({ id, poster_path, title, date, media_type, vote_average }) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TransitionsModal
        open={open}
        handleClose={handleClose}
        media_type={media_type}
        id={id}
      />

      <div className='media' onClick={handleOpen} >
        <Badge badgeContent={vote_average.toFixed(1)} color={vote_average >= 6 ? "primary" : "secondary"} />
        <div className='poster-div' >
          <img className='poster' src={poster_path ? `${img_300}${poster_path}` : unavailable} alt={title} />
        </div>
        <h5 style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }} className='title'>{title}</h5>
        <span className='subtitle'>{media_type === "tv" ? "TV Series" : "Movie"}
          <span >{date}</span>
        </span>

      </div>
    </>
  )
}

export default SingleMovie