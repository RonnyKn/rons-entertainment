const useGenre = (selectedGenres) => {
  if (selectedGenres < 1) return "";

  const genreId = selectedGenres.map((g) => g.id)
  return genreId.reduce((acc, curr) => acc + "," + curr);
}

export default useGenre;