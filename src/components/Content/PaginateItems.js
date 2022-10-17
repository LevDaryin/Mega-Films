import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Card from "./Card.js";

import styles from './PaginateItems.module.scss'

const Items = ({ currentItems }) => {
  return (
    <React.Fragment>
      {currentItems && currentItems.map((item) => (
        <Card
          key={item.id}
          kinopoiskRating={item.kinopoiskRating}
          poster={item.poster}
          name={item.name}
          year={item.year}
          genres={item.genres[0]}
          id={item.id}
        />
      ))}
    </React.Fragment>
  )
}

const PaginateItems = ({ itemsPerPage, content, filters }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(content.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(content.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, content]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % content.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const newOffset = 0;
    setItemOffset(newOffset);
  }, [filters]);

  return (
    <React.Fragment>
      {(currentItems != null) ? (currentItems.length != 0) ? <Items currentItems={currentItems} /> : <div className={styles.errorTitle}>Ничего не найдено</div> : undefined }
      <ReactPaginate
        containerClassName={styles.listContainer}
        breakLabel="..."
        breakClassName={styles.breakList}
        breakLinkClassName={styles.breakLink}
        nextLabel="Вперед"
        nextClassName={styles.nextButton}
        nextLinkClassName={styles.nextLink}
        previousLinkClassName={styles.previousLink}
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        pageClassName={styles.page}
        pageLinkClassName={styles.pageLink}
        activeClassName={styles.activePage}
        activeLinkClassName={styles.activeLink}
        previousLabel="Назад"
        previousClassName={styles.previousButton}
        renderOnZeroPageCount={undefined}
        marginPagesDisplayed={1}
        forcePage={(filters.name === "" && filters.genres.length === 0) ? undefined : 0}
      />
    </React.Fragment>
  )
}

export default PaginateItems;