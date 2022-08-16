import { Link } from "react-router-dom";

import styles from "./Card.module.scss";

const Card = (props) => {

  // Временный вариант
  let background = "";

  if (props.kinopoiskRating > 7) {
    background = "#01AA12";
  } else if (props.kinopoiskRating > 5) {
    background = "#717171";
  } else {
    background = "#BF0000";
  }

  return (
    <Link to={`/movie/${props.id}`}>
      <li className={styles.card}>
        <div style={{background: background,}} className={styles.grade}> <span>{props.kinopoiskRating}</span> </div>
        <img width={114} height={170} src={props.poster} alt="Poster" />
        <b>{props.name}</b>
        <p>{`${props.year}, ${props.genres}`}</p>
      </li>
    </Link>
  );
};

export default Card;