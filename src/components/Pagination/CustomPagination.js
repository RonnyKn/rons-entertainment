import { createTheme, Pagination, ThemeProvider } from '@mui/material'
import React from 'react'

const CustomPagination = ({ setPage, numPage = 10 }) => {

  const handlePage = (page) => {
    setPage(page)
    window.scroll(0, 0)
  }

  const darkTheme = createTheme({
    palette: {
      mode: "dark", primary: {
        main: "#fff",
      },
    },
  });

  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
      backgroundColor: "#39445a",
      color: "white",
    }}>
      <ThemeProvider theme={darkTheme}>
        <Pagination count={numPage}
          shape="rounded"
          color='primary'
          onChange={(e) => handlePage(e.target.textContent)}
          hideNextButton hidePrevButton
        />
      </ThemeProvider>
    </div>
  )
}

export default CustomPagination