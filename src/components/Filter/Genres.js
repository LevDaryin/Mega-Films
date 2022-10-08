import React from "react";
import { useState } from "react";
import styles from "./Genres.module.scss";

const Genres = (props) => {

  const genres = ["комедия", "семейный", "боевик", "триллер", "ужасы", "фантастика", "фэнтези", "драма", "криминал", "мультфильм", "приключение", "детектив"];

  const [showMore, setShowMore] = useState(false);

  const showHandler = () => {
    setShowMore(!showMore);
  };

  return (
    <React.Fragment>
      <div className={styles.genresShow + ((showMore) ? "__more" : "")} onChange={props.onChangeGenresHandler}>
        {genres.map((genre) => (
          <div className={styles.genreWrapper} key={genre}>
            <input type="checkbox" id={genre} value={genre} />
            <label htmlFor={genre}>{genre}</label>
          </div>
        ))}
      </div>
      <button className={styles.showButton} onClick={showHandler}>{(!showMore) ? "Показать еще..." : "Скрыть жанры..."}</button>
    </React.Fragment>
  );
};

export default Genres;
