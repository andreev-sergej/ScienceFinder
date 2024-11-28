import React, { useState } from "react";
import styles from "../styles/ScienceFinderUpload.module.css";
import { FileHistoryItem } from "../components/FileHistoryItem";
import { useNavigate } from 'react-router-dom';

const historyItems = [
  {
    fileName: "NV-hintz2021.pdf",
    fileSize: "78 MB",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/621471063911b27414580aceedb3c08089ead66bd6082b739fe2af5b4c16fa74?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599",
  },
  {
    fileName: "Diggle-Fourier.pdf",
    fileSize: "30 MB",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/621471063911b27414580aceedb3c08089ead66bd6082b739fe2af5b4c16fa74?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599",
  },
  {
    fileName: "MathematicsStatistics.pdf",
    fileSize: "50 MB",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/621471063911b27414580aceedb3c08089ead66bd6082b739fe2af5b4c16fa74?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599",
  },
  {
    fileName: "Belomestny_Semiparametric...",
    fileSize: "100 MB",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/621471063911b27414580aceedb3c08089ead66bd6082b739fe2af5b4c16fa74?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599",
  },
];

export const ScienceFinderUpload = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log("Загруженный файл:", event.target.files[0]);
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click(); // Запускаем input при клике на кнопку
  };

  return (
    <main className={styles.uploadPage}>
      <section className={styles.content}>
        <h2 className={styles.historyTitle}>История поиска</h2>

        {historyItems.map((item, index) => (
          <FileHistoryItem
            key={index}
            fileName={item.fileName}
            fileSize={item.fileSize}
            iconSrc={item.iconSrc}
          />
        ))}

        <h2 className={styles.uploadTitle}>Загрузите статью</h2>
        <p className={styles.uploadDescription}>
          Загрузите PDF-файл, и приложение по ключевым словам найдет похожие
          научные работы
        </p>

        <div className={styles.uploadSection}>
          <div className={styles.fileSelector}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0a9729db24b3a697f0d83385e1596d7ce866ad1f54afdd99fd24a7cae172f84?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599"
              alt="PDF upload icon"
              className={styles.uploadIcon}
            />
            <span className={styles.fileType}>PDF Document</span>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/96271b2da03cf403539c2f8a09ad2a4ce7ce51b2bc3ccc150f2f559e0b303b08?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599"
            alt=""
            className={styles.actionIcon}
          />
        </div>
        
        <input
          type="file"
          id="fileInput"
          accept="application/pdf"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />  
        <button className={styles.uploadButton} onClick={handleUploadClick}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/62e38852c1d5fdf97eae5173b74dbdc344c4f6f0e01de978195545e0247bface?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599"
            alt=""
            className={styles.buttonIcon}
          />
          <span>Загрузить файл</span>
        </button>

        <button onClick={() => navigate('/second')} className={styles.analyzeButton}>Анализ статьи</button>

        <div className={styles.handle} role="presentation" />
      </section>
    </main>
  );
};
