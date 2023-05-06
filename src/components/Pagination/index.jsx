import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../store/slices/filterSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.filter);
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
