import React from "react";
import ReactPaginate from "react-paginate";
import "../pagination/Pagination.scss";

function Paginantion({ Page , setPage, total }) {
  const pageCount = total;
  const handlePageClick = ({selected}) => {
   /* const newOffset = (event.selected * 6) % total; */ 
    
    setPage(selected + 1);
    console.log(Page)
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
        activeClassName="activeClassName"
      />
    </>
  );
}
export default Paginantion;
