import React from "react";
import { Tag } from "../components/Tag";
import { FilterInput } from "../components/FilterInput";
import styles from "../styles/ArticleAnalytics.module.css";
import { useNavigate } from 'react-router-dom';

const tags = [
  {
    text: "Машинное обучение",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd16df6a691b9fe34d5a5f79a0e2bae7a237ddb56e55395ff67fa88097a2d62c?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599",
  },
  {
    text: "Социальные сети",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2f56a648caab9a28a14ff5ab59ffd9e750d4fb2c33b482d167f0ccfa0e0eb13?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599",
  },
  {
    text: "Анализ данных",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2f56a648caab9a28a14ff5ab59ffd9e750d4fb2c33b482d167f0ccfa0e0eb13?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599",
  },
  {
    text: "Нейронные сети",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2f56a648caab9a28a14ff5ab59ffd9e750d4fb2c33b482d167f0ccfa0e0eb13?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599",
  },
  {
    text: "NLP",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2f56a648caab9a28a14ff5ab59ffd9e750d4fb2c33b482d167f0ccfa0e0eb13?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599",
  },
  {
    text: "Выявление сообществ",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/81fca67e0118a0aa9f9af4bc208b412d56f0eb610aab75b482ef0507c877d04e?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599",
  },
];

export const ArticleAnalytics = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleBar}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bec6516e72a7f9b03cbd80f5f234ee52d9cb32d6565eab2662cf35d56c535e4f?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599"
            alt=""
            className={styles.menuIcon}
          />
          <h1 className={styles.title}>ScienceFinder</h1>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e1f3a9f1a2cf9b6c26137d0904a8e153faaba994cff59db34a83b33d842cd37?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599"
            alt=""
            className={styles.searchIcon}
          />
        </div>
      </header>

      <article className={styles.content}>
        <div className={styles.documentHeader}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce06f8c1a9ef6b6226ae0008ff52d884f6a191ea05e1fd9cb79690c298c7b9c9?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599"
            alt="PDF document icon"
            className={styles.documentIcon}
          />
          <span className={styles.documentType}>PDF Document</span>
        </div>

        <h2 className={styles.articleTitle}>
          Методы машинного обучения для анализа социальных сетей: современные
          подходы и перспективы
        </h2>

        <p className={styles.articleDescription}>
          В статье рассматриваются современные методы машинного обучения,
          используемые для анализа данных социальных сетей. Описываются
          алгоритмы для выявления сообществ, предсказания поведения
          пользователей и анализа текстовой информации. Особое внимание уделено
          применению нейронных сетей и методов обработки естественного языка
          (NLP). Авторы обсуждают перспективы развития данной области и
          потенциальные проблемы, связанные с обработкой больших данных и
          приватностью пользователей.
        </p>

        <div className={styles.tagGroups}>
          {tags.map((tag, index) => (
            <Tag key={index} text={tag.text} icon={tag.icon} />
          ))}
        </div>

        <FilterInput
          label="Дата публикации"
          placeholder="Выбрать дату публикации"
        />

        <FilterInput
          label="Количество цитирований"
          placeholder="Выбрать количество цитирований"
        />

        <div className={styles.actions}>
          <button onClick={() => navigate('/')} className={styles.backButton}>Назад</button>
          <button onClick={() => navigate('/third')} className={styles.searchButton}>Поиск статей</button>
        </div>

        <div className={styles.handle} role="presentation" />
      </article>
    </main>
  );
};
