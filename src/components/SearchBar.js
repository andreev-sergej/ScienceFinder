import React from "react";
import styles from "../styles/Articles.module.css";

export const SearchBar = () => {
  return (
    <form role="search" className={styles.searchContainer}>
      <label htmlFor="articleSearch" className={styles.visuallyHidden}>
        Поиск по статьям
      </label>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2cef91d2235146e97f58889cd20983e5ad314282c64c24a1bbdb6c9c942dfbf?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599"
        alt=""
        className={styles.searchIcon}
      />
      <input
        type="search"
        id="articleSearch"
        className={styles.searchInput}
        placeholder="Поиск по статьям"
      />
    </form>
  );
};
