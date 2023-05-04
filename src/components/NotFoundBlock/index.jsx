import React from "react";

import { Link } from "react-router-dom";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBLock = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.text}>Вибачте, але такої сторінки не існує</h2>
      <Link to="/">
        <button className="button">Повернутись на головну</button>
      </Link>
    </div>
  );
};

export default NotFoundBLock;
