import { getMovies } from "./data/fakeMovieService";
import Movies from "./components/movies";
import { useEffect, useState } from "react";
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(getMovies());
  }, []);

  const handleDelete = (movie) => {
    const array = [...movies];
    const filteredArray = array.filter((i) => i !== movie);
    setMovies(filteredArray);
  };

  return (
    <main className="container">
      <Movies movies={movies} setMovies={setMovies} onDelete={handleDelete} />
    </main>
  );
}

export default App;
