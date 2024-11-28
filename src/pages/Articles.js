import React from "react";
import { SearchBar } from "../components/SearchBar";
import { ArticleCard } from "../components/ArticleCard";
import styles from "../styles/Articles.module.css";
import { useNavigate } from 'react-router-dom';

export const articles = [
  {
    id: 1,
    title: "Optimization Techniques in Deep Learning",
    description:
      "Обзор современных методов оптимизации для обучения нейронных сетей.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fcaab691113ebf608bed57f90fc9f89e502d751fceb0ef82165d18b421a92886?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599",
  },
  {
    id: 2,
    title: "Transfer Learning in NLP",
    description:
      "Исследование переноса знаний в задачах обработки естественного языка.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fcaab691113ebf608bed57f90fc9f89e502d751fceb0ef82165d18b421a92886?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599",
  },
  {
    id: 3,
    title: "Explainable AI: Methods and Challenges",
    description:
      "Анализ подходов к интерпретации решений моделей машинного обучения.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fcaab691113ebf608bed57f90fc9f89e502d751fceb0ef82165d18b421a92886?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599",
  },
  {
    id: 4,
    title: "Robustness of Machine Learning Models",
    description: "Оценка устойчивости алгоритмов к шуму и атакам на данные.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fcaab691113ebf608bed57f90fc9f89e502d751fceb0ef82165d18b421a92886?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599",
  },
  {
    id: 5,
    title: "Optimization Techniques in Deep Learning",
    description:
      "Обзор современных методов оптимизации для обучения нейронных сетей.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0e8a78e6200e891b66f3a9c06c86be55b18b3d6d5a8bb04ad0912892c973985?placeholderIfAbsent=true&apiKey=5cb49c77a8104d18ae484534e0324599",
  },
];

export const Articles = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.articlesContainer}>
      <h2 className={styles.mainTitle}>Релевантные статьи</h2>
      <SearchBar />
      <section className={styles.articlesList}>
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.description}
            icon={article.icon}
          />
        ))}
      </section>
    </main>
  );
};
