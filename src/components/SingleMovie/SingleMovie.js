import './SingleMovie.css'
import React, { useEffect, useState } from 'react'
import { img_300, img_500, unavailable } from '../../config/Config'
import { Badge } from '@mui/material'
import { Button, Modal } from 'react-bootstrap'
import YtIcon from '@mui/icons-material/YouTube';
import axios from 'axios'

// import TransitionsModal from '../Modal/Modal'

const SingleMovie = ({ id, poster_path, title, date, media_type, vote_average, overview }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [video, setVideo] = useState()

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`
    )
    setVideo(data.results[0]?.key)
  }
  useEffect(() => {
    fetchVideo()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {/* <TransitionsModal
        open={open}
        handleClose={handleClose}
        media_type={media_type}
        id={id}
      /> */}


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

      <Modal
        show={open}
        onHide={handleClose}
        className="modal"
        size='xl'
        style={{ backgroundColor: 'transparent' }}
      >
        <Modal.Header>
          <Modal.Title style={{ fontFamily: 'Gumela', fontSize: '2vw' }} >Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content">
            <div className='modal-box'>
              <div class="ribbon"><span>Rating: {vote_average.toFixed(1)}</span></div>
              <img src={img_500 + poster_path} alt="" className="modal-image" />
              <div className="modal-body">
                <p><strong>Title : <br /></strong>{title}</p>
                <p><strong>Release : <br /></strong>{date}</p>
                <p><strong>Overview : <br /></strong>{overview}</p>
                <p><strong>ImDb: <br /></strong>{vote_average.toFixed(1)}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btnTrailer' variant='danger' target='__blank'
            href={`https://www.youtube.com/watch?v=${video}`}
          > <YtIcon /> <strong> Watch Trailer</strong> <em>Coming Soon! </em></Button>
          <Button variant='secondary' onClick={handleClose}><strong> Close </strong></Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SingleMovie