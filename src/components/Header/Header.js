import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}>
          <img src="/assets/logo.svg" alt="Site-logo" />
          <div className={styles.logoDescription}>
            <h2>MEGAFILMS</h2>
            <h3>Все фильмы мира!</h3>
          </div>
        </div>

        <img className={styles.accountIcon} src="/assets/accountIcon.svg" alt="Account-icon" />
      </div>

      <div className={styles.divider} />
    </React.Fragment>
  );
};

export default Header;