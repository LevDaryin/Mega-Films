import { useState, useEffect } from "react";
import Filter from "../../components/Filter/Filter";

import movies from "../../assets/films"; //simulation of getting data from the server

import styles from "./Content.module.scss";
import PaginateItems from "./PaginateItems";

const Content = () => {
  const [films, setFilms] = useState(movies);
  const [name, setName] = useState("");
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState({
    leftEdge: 1950,
    rightEdge: new Date().getFullYear()
  });

  /* useEffect(() => {
    fetch(`https://run.mocky.io/v3/3d83f140-97ae-4395-945c-b7436c15fd9c`, {
      headers : {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json"
      }
  })
  .then((response) => response.json())
  .then((messages) => {setFilms(messages);
  });
  }, []); */

  const filterName = (film) => {
    return film.name.toLowerCase().includes(name.toLowerCase());
  };

  const filterGenre = (film) => {
    if (genres.length !== 0) {
      let flag = false;
      for (let item in genres) {
        if (film.genres.includes(genres[item])) {
          flag = true;
        } else {
          flag = false;
          break;
        }
      }
      return flag;
    } else {
      return true;
    }
  };

  const filterYears = (film) => {
    return (film.year >= years.leftEdge && film.year <= years.rightEdge)
  };

  const addName = (name) => {
    setName(name);
  };

  const addGenres = (genre) => {
    if (genres.includes(genre)) {
      setGenres(
        genres.filter((item) => {
          return item !== genre;
        })
      );
    } else {
      setGenres([...genres, genre]);
    }
  };

  const addYears = (years) => {
    setYears({
      leftEdge: years[0],
      rightEdge: years[1]
    });
  };

  let filteredFilms = films.filter(filterName).filter(filterGenre).filter(filterYears);

  return (
    <div className={styles.contentWrapper}>
      <Filter addName={addName} addGenres={addGenres} addYears={addYears} />
      <div className={styles.cardsWrapper}>
        <PaginateItems itemsPerPage={12} content={filteredFilms} filters={{name: name, genres: genres}} />
      </div>
    </div>
  );
};

export default Content;
