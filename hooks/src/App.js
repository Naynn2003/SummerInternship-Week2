import React, { useState, useEffect } from 'react';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://inshorts.me/news/all?offset=0&limit=21')
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount in class components

  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.hashId}>
            <h2>{article.title}</h2>
            <p>{article.subtitle}</p>
            <p>Source: <a href={article.sourceUrl}>{article.sourceName}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
}




export default App;
