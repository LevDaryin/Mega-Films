import { useRef } from "react";
import Country from "./Country";
import Genres from "./Genres";
import Slider from "./Slider";

import styles from "./Filter.module.scss";

const Filter = (props) => {

  const inputValue = useRef();

  const onChangeGenresHandler = (event) => {
    props.addGenres(event.target.value);
  };

  const changeValueHandler = () => {
    props.addName(inputValue.current.value);
  };

  const onChangeCountryHandler = (event) => {
    props.addCountry(event.target.value);
  };

  return (
    <div className={styles.filterWrapper}>
      <h2 className={styles.filterHeader}>Фильтры</h2>

      <b className={styles.filterTitle}>По названию:</b>
      <input
        className={styles.filterName}
        maxLength={24}
        placeholder="Название..."
        ref={inputValue}
        onChange={changeValueHandler}
      />

      <b className={styles.filterTitle}>По году выпуска:</b>
      <Slider addYears={props.addYears} />

      <b className={styles.filterTitle}>По жанру:</b>
      <Genres onChangeGenresHandler={onChangeGenresHandler} />

      <b className={styles.filterTitle}>По стране выпуска:</b>
      <Country onChangeCountryHandler={onChangeCountryHandler} />
    </div>
  );
};

export default Filter;
