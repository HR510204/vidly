import React from "react";

const Filter = ({
  genres,
  onGenre,
  currentGenre,
  textProperty,
  valueProperty,
}) => {
  return (
    <ul className="list-group" style={{ cursor: "pointer" }}>
      {genres.map((genre) => (
        <li
          key={genre[valueProperty]}
          onClick={() => onGenre(genre)}
          className={
            genre === currentGenre
              ? "list-group-item active"
              : "list-group-item "
          }
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};
Filter.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default Filter;
