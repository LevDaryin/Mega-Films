import React from "react";
import { useState } from "react";
import styles from "./Country.module.scss";

const Country = (props) => {

  const country = ["США", "Россия", "Великобритания", "Австралия", "Франция", "Индия", "Китай", "Япония", "Южная Корея", "Италия", "Германия"];

  const [showMore, setShowMore] = useState(false);

  const showHandler = () => {
    setShowMore(!showMore);
  };

  return (
    <React.Fragment>
      <div className={styles.countryShow + ((showMore) ? "__more" : "")} onChange={props.onChangeCountryHandler}>
        {country.map((country) => (
          <div className={styles.countryWrapper} key={country}>
            <input type="checkbox" id={country} value={country} />
            <label htmlFor={country}>{country}</label>
          </div>
        ))}
      </div>
      <button className={styles.showButton} onClick={showHandler}>{(!showMore) ? "Показать еще..." : "Скрыть страны..."}</button>
    </React.Fragment>
  );
};

export default Country;
