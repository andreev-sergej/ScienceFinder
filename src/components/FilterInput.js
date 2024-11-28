import React from "react";
import styles from "../styles/FilterInput.module.css";

export const FilterInput = ({ label, placeholder }) => {
  return (
    <div className={styles.filterContainer}>
      <label className={styles.filterLabel}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.filterInput}
          placeholder={placeholder}
          aria-label={placeholder}
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1ed58dc72c9fc0ef478996480940929d54d5af7b8462f24762417b9250b926e?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599"
          alt=""
          className={styles.inputIcon}
        />
      </div>
    </div>
  );
};
