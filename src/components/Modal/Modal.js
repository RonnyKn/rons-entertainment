// import './Modal.css'
// import React, { useEffect, useState } from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import { Button } from '@mui/material';
// import axios from 'axios';
// import { img_500, unavailable, unavailableLandscape } from '../../config/Config';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: "90%",
//   height: "80%",
//   bgcolor: "#39445a",
//   border: '2px solid #000',
//   boxShadow: 24,
//   color: '#fff',
//   p: 4,
//   borderRadius: 10,
//   display: "flex",
//   // alignItems: "center",
//   // justifyContent: "center",
//   flexDirection: "column"
// };

// export default function TransitionsModal({ id, media_type, open, handleClose }) {
//   const [movie, setMovie] = useState()

//   const fetchModal = async () => {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`
//     )
//     setMovie(data.results)
//   }
//   console.log(id);
//   useEffect(() => {
//     fetchModal()
//   }, [])

//   return (
//     <div>

//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={open}>
//           <Box sx={style}>
//             {movie && (
//               <div>
//                 <img
//                   src={
//                     movie.poster_path
//                       ? `${img_500}/${movie.poster_path}`
//                       : unavailable
//                   }
//                   alt={movie.name || movie.title}
//                   className="ContentModal__portrait"
//                 />
//                 <img
//                   src={
//                     movie.backdrop_path
//                       ? `${img_500}/${movie.backdrop_path}`
//                       : unavailableLandscape
//                   }
//                   alt={movie.name || movie.title}
//                   className="ContentModal__landscape"
//                 />
//               </div>
//             )}

//             <Button onClick={handleClose}> Close </Button>
//           </Box>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }


