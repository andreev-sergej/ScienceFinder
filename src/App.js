import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Импорты React Router
import './styles/styles.css'; // Путь к стилям

// Импорты страниц (компонентов)
import { ScienceFinderUpload } from './pages/ScienceFinderUpload';
import { ArticleAnalytics } from './pages/ArticleAnalytics'; // Дополнительная страница
import { Articles } from './pages/Articles'; // Дополнительная страница

function App() {
  return (
    <Router> {/* Обертка маршрутизатора */}
      <div className="App">
        <Routes>
          <Route path="/" element={<ScienceFinderUpload />} />
          <Route path="/second" element={<ArticleAnalytics />} />
          <Route path="/third" element={<Articles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
