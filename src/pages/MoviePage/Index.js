import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import movies from "../../assets/films"; //simulation of getting data from the server

import styles from "./Index.module.scss";

const Index = () => {
  const { id } = useParams();
  let film = movies.filter((movie) => {return movie.id === id}); //simulation of getting data from the server
  const [movie, setMovie] = useState(film);

  /* console.log(film);
  console.log(movie); */

  /* useEffect(() => {
    fetch(`https://run.mocky.io/v3/3d83f140-97ae-4395-945c-b7436c15fd9c/${id}`, {
      headers : {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json"
      }
  })
  .then((response) => response.json())
  .then((messages) => {setMovie(messages);
  });
  }, [id]); */

  let genres = movie[0].genres.reduce((genres, genre) => {
    return genres + ", " + genre;
  })

  return (
    <div className={styles.background}>
      <Header /> 
      <div className={styles.content}>
        <img src={movie[0].posterFull} alt="Movie poster" />
        <div className="description">
          <h2 className={styles.title}>{movie[0].name}</h2>
          <div className={styles.block}>
            <h3>О фильме:</h3>
            <ul>
              <li> Год: <span> {movie[0].year} </span> </li>
              <li> Страна: <span> {movie[0].country} </span> </li>
              <li> Жанры: <span> {genres} </span> </li>
              <li> Рейтинг Кинопоиска: <span> {movie[0].kinopoiskRating} </span> </li>
              <li> Рейтинг Imdb: <span> {movie[0].ImdbRating} </span> </li>
              <li> Возраст: <span> {movie[0].age} </span> </li>
              <li> Рейтинг MPAA: <span> {movie[0].ageMPAA} </span> </li>
            </ul>
          </div>
          <div className={styles.block}>
            <h3>Описание:</h3>
            <p> {movie[0].description} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;