import React from "react";
import _ from "lodash";
const Pagination = ({
  length,
  pageSize,
  currentPege,
  onPageChange,
  setCurrentPage,
  onPreviousPage,
}) => {
  const pagesCount = Math.ceil(length / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  const onNextPage = () => {
    if (pagesCount > currentPege) setCurrentPage(currentPege + 1);
  };

  return (
    <ul className="pagination ">
      <li
        className={currentPege === 1 ? "page-item disabled" : "pages-item"}
        onClick={onPreviousPage}
      >
        <span className="page-link">Previous</span>
      </li>
      {pages.map((item) => (
        <li
          onClick={() => onPageChange(item)}
          key={item}
          className={currentPege === item ? "page-item  active" : "page-item "}
        >
          <span className="page-link ">{item}</span>
        </li>
      ))}
      <li
        onClick={onNextPage}
        className={
          pagesCount === currentPege ? "page-item disabled" : "pages-item"
        }
      >
        <span className="page-link">Next</span>
      </li>
    </ul>
  );
};

export default Pagination;
