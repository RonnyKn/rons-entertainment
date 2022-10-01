import './SingleMovie.css'
import React, { useEffect, useState } from 'react'
import { img_300, img_500, unavailable } from '../../config/Config'
import { Badge } from '@mui/material'
import { Button, Modal } from 'react-bootstrap'
import YtIcon from '@mui/icons-material/YouTube';
import CloseIcon from '@mui/icons-material/ExitToApp';
import axios from 'axios'

const SingleMovie = ({ id, poster_path, title, date, media_type, vote_average, overview }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [video, setVideo] = useState()
  const [video2, setVideo2] = useState()
  const [video3, setVideo3] = useState()

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`
    )
    setVideo(data.results[0]?.key)
    setVideo2(data.results[1]?.key)
    setVideo3(data.results[2]?.key)
  }

  useEffect(() => {
    fetchVideo()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className='media' onClick={handleOpen} >
        <Badge badgeContent={vote_average.toFixed(1)} color={vote_average >= 6 ? "primary" : "secondary"} />
        <div className='poster-div' >
          <img src={poster_path ? `${img_300}${poster_path}` : unavailable} alt={title} />
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
          <Modal.Title className='m-title' style={{ fontFamily: 'Gumela', fontSize: '3vw' }} >Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content">
            <div className='modal-box'>
              <div class="ribbon"><span>Rating: {vote_average.toFixed(1)}</span></div>
              <img src={poster_path ? img_500 + poster_path : unavailable} alt="" className="modal-image" />
              <div className="modal-body">
                <p className='title-1'><strong>Title : <br /></strong>{title}</p>
                <h3 className='title-2' style={{ fontFamily: 'Gumela', textAlign: 'center' }}><strong><em>{title}</em></strong></h3>
                <p><strong>Release : <br /></strong>{date}</p>
                <p><strong>Overview : <br /></strong>{overview}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {video === undefined ? <span></span> :
            <div className='trailers'>
              <Button className='btnTrailer' variant='danger' target='__blank'
                href={`https://www.youtube.com/watch?v=${video}`}> <YtIcon /> <strong> Trailer 1</strong>
              </Button>
              <Button className='btnTrailer' variant='danger' target='__blank'
                href={`https://www.youtube.com/watch?v=${video2}`}> <YtIcon /> <strong>  Trailer 2</strong>
              </Button>
              <Button className='btnTrailer' variant='danger' target='__blank'
                href={`https://www.youtube.com/watch?v=${video3}`}> <YtIcon /> <strong> Trailer 3</strong>
              </Button>
            </div>
          }
          <Button className='close' variant='secondary' onClick={handleClose}><strong> Close <CloseIcon /> </strong></Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SingleMovie