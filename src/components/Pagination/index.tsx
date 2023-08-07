import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useSelector } from "react-redux";
import { setCurrentPage } from "../../store/slices/filterSlice";
import { RootState, useAppDispatch } from "../../store";

const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentPage } = useSelector((state: RootState) => state.filter);
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default Pagination;
