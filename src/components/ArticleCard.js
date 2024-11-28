import React from "react";
import styles from "../styles/Articles.module.css";

export const ArticleCard = ({ title, description, icon }) => {
  return (
    <article className={styles.articleCard}>
      <div className={styles.articleContent}>
        <h3 className={styles.articleTitle}>{title}</h3>
        <p className={styles.articleDescription}>{description}</p>
      </div>
      <img loading="lazy" src={icon} alt="" className={styles.articleIcon} />
    </article>
  );
};
