import { useState, useRef } from "react";

import styles from "./Filter.module.scss";

const Filter = (props) => {

  const inputValue = useRef();

  const [showMore, setShowMore] = useState(false);

  const showHandler = () => {
    setShowMore(!showMore);
  };

  const onChangeGenresHandler = (event) => {
    props.addGenres(event.target.value);
  };

  /* const onChangeGenresHandler = (event) => {
    if (event.target.checked) {
      genres.push(event.target.value);
      console.log(genres);
    } else {
      let genreIndex = genres.indexOf(event.target.value);
      genres.splice(genreIndex, 1);
    }
    props.addFilters({...filter, genres: genres});
  }; */

  const changeValueHandler = () => {
    props.addName(inputValue.current.value);
  };

  return (
    <div className={styles.filterWrapper}>
      <h2 className={styles.filterHeader}>Фильтры</h2>
      <b className={styles.filterTitle}>По названию:</b>
      <input className={styles.filterName} maxLength={24} placeholder="Название..." ref={inputValue} onChange={changeValueHandler}/>

      <b className={styles.filterTitle}>По жанру:</b>
      <div className={styles.checkboxes + (showMore ? styles.checkboxes_show : "")} onChange={onChangeGenresHandler}>
        <div className={styles.checkbox}> <input value={"комедия"} type="checkbox" /> <span>комедия</span> </div>
        <div className={styles.checkbox}> <input value={"семейный"} type="checkbox" /> <span>семейный</span> </div>
        <div className={styles.checkbox}> <input value={"боевик"} type="checkbox" /> <span>боевик</span> </div>
        <div className={styles.checkbox}> <input value={"триллер"} type="checkbox" /> <span>триллер</span> </div>
        <div className={styles.checkbox}> <input value={"ужасы"} type="checkbox" /> <span>ужасы</span> </div>
        <div className={styles.checkbox}> <input value={"фантастика"} type="checkbox" /> <span>фантастика</span> </div>
        <div className={styles.checkbox}> <input value={"фентези"} type="checkbox" /> <span>фентези</span> </div>
        <div className={styles.checkbox}> <input value={"драма"} type="checkbox" /> <span>драма</span> </div>
        <div className={styles.checkbox}> <input value={"криминал"} type="checkbox" /> <span>криминал</span> </div>
        <div className={styles.checkbox}> <input value={"мультфильм"} type="checkbox" /> <span>мультфильм</span> </div>
        <div className={styles.checkbox}> <input value={"приключение"} type="checkbox" /> <span>приключение</span> </div>
        <div className={styles.checkbox}> <input value={"детектив"} type="checkbox" /> <span>детектив</span> </div>
      </div>
      <button className={styles.showButton} onClick={showHandler} > {!showMore ? "Показать еще..." : "Скрыть..." } </button>
    </div>
  );
};

export default Filter;