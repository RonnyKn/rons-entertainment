import './MainNav.css'
import React, { useEffect, useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import Whatshot from '@mui/icons-material/Whatshot';
import MessageIcon from '@mui/icons-material/Message';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: '100',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    if (value === 0) navigate('/');
    else if (value === 1) navigate('/movies');
    else if (value === 2) navigate('/series');
    else if (value === 3) navigate('/search');
    else if (value === 4) navigate('/message');
  }, [value, navigate])

  return (

    <BottomNavigation
      className={classes.root}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      style={{ color: "white", backgroundColor: "#2d313a", gap: '0' }}
    >
      <BottomNavigationAction
        active='true'
        label="Trending"
        style={{ color: "white" }}
        icon={<Whatshot />} />
      <BottomNavigationAction
        label="Movie"
        style={{ color: "white" }}
        icon={<MovieIcon />} />
      <BottomNavigationAction
        label="Tv Series"
        style={{ color: "white" }}
        icon={<TvIcon />} />
      <BottomNavigationAction
        label="Search"
        style={{ color: "white" }}
        icon={<SearchIcon />} />
      <BottomNavigationAction
        label="Message Me"
        style={{ color: "white" }}
        icon={<MessageIcon />} />
    </BottomNavigation>

  );
}
