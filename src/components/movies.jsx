import React, { useState, useEffect } from "react";
import { getGenres } from "../data/fakeGenreService";
import Like from "./common/like";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import Filter from "./common/filter";
const Movies = ({ movies, onDelete, setMovies }) => {
  const [pageSize, setPageSize] = useState(1);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGenre, setCurrentGenre] = useState(null);
  const { length: count } = movies;

  useEffect(() => {
    setGenres(getGenres());
  }, []);
  useEffect(() => {
    setCurrentPage(1);
  }, [currentGenre]);
  // event handlers
  const handleGenre = (genre) => {
    setCurrentGenre(genre);
  };
  const handleLike = (movie) => {
    const m = [...movies];
    const index = m.indexOf(movie);
    m[index].liked = !m[index].liked;
    setMovies(m);
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    const a = (page - 1) * pageSize;
  };
  const filteredGenre = currentGenre
    ? movies.filter((m) => m.genre._id === currentGenre._id)
    : movies;
  const filtered = paginate(filteredGenre, currentPage, pageSize);

  // return statement
  if (count === 0)
    return (
      <h2 className="text-center text-muted">
        No Movies available in the database
      </h2>
    );
  return (
    <div className="row">
      <div className="col-md-3">
        <Filter
          genres={genres}
          onGenre={handleGenre}
          currentGenre={currentGenre}
        />
      </div>
      <div className="col">
        <h2 className="p-2 badge-warning rounded mt-2">
          {count} Movies available in the database
        </h2>
        <table className="table">
          <thead className="table-active">
            <tr>
              <th>title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((movie) => (
              <tr className="text-muted" key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like liked={movie.liked} onLike={() => handleLike(movie)} />
                </td>
                <td>
                  <button
                    onClick={() => onDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          length={filteredGenre.length}
          pageSize={pageSize}
          currentPege={currentPage}
          setCurrentPage={setCurrentPage}
          onPageChange={handlePageChange}
          onPreviousPage={handlePreviousPage}
        />
      </div>
    </div>
  );
};

export default Movies;
