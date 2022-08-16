import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.headerWrapper}>
        <Link to="/" className={styles.logo}>
          <img src="/assets/logo.svg" alt="Site-logo" />
          <div className={styles.logoDescription}>
            <h2>MEGAFILMS</h2>
            <h3>Все фильмы мира!</h3>
          </div>
        </Link>

        <img className={styles.accountIcon} src="/assets/accountIcon.svg" alt="Account-icon" />
      </div>

      <div className={styles.divider} />
    </React.Fragment>
  );
};

export default Header;