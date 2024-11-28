import React from "react";
import styles from "../styles/FileHistoryItem.module.css";

export const FileHistoryItem = ({ fileName, fileSize, iconSrc }) => {
  return (
    <div className={styles.historyItem}>
      <div className={styles.fileInfo}>
        <img
          loading="lazy"
          src={iconSrc}
          alt="PDF file icon"
          className={styles.fileIcon}
        />
        <div className={styles.fileName}>{fileName}</div>
      </div>
      {fileSize && (
        <div className={styles.sizeInfo}>
          <div>{fileSize}</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/96271b2da03cf403539c2f8a09ad2a4ce7ce51b2bc3ccc150f2f559e0b303b08?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599"
            alt=""
            className={styles.actionIcon}
          />
        </div>
      )}
    </div>
  );
};
