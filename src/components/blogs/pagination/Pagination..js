import React from "react";
import ReactPaginate from "react-paginate";
import "../pagination/Pagination.scss";

function Paginantion({ arrayOfArticles, Page, setPage, total }) {
  

  
  const pageCount = total;
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 6) % total;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setPage(newOffset);
  };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next->"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<- previous"
        renderOnZeroPageCount={null}
        containerClassName="main-container"
        pageClassName="pageClassName"
        nextClassName="nextClassName"
        previousClassName="previousClassName"
        marginPagesDisplayed="3"
        breakClassName="breakClassName"
        previousLinkClassName="previousLinkClassName"
        nextLinkClassName="nextLinkClassName"
        activeClassName= "activeClassName"
      />
    </>
  );
}
export default Paginantion;
