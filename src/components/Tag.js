import React from "react";
import styles from "../styles/Tag.module.css";

export const Tag = ({ text, icon }) => {
  return (
    <div className={styles.tag}>
      <div className={styles.tagText}>{text}</div>
      {icon && (
        <img loading="lazy" src={icon} alt="" className={styles.tagIcon} />
      )}
    </div>
  );
};
