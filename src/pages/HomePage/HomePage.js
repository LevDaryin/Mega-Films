import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";

import styles from "./HomePage.module.scss";

const HomePage = (props) => {
  return (
    <div className={styles.background}>
      <Header />
      <Content />
    </div>
  );
};

export default HomePage;
