import {useState, useEffect} from 'react'
import React from "react";
import "./LastArticle.css";
import ArticleCard from "./ArticleCard";

const LastArticle = () => {
	const [latestArticles, setLatestArticles] = useState([]);
  
 const fetchLatestArticles = () => {
    fetch("/api/articles/latest")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setLatestArticles(data);
      })
      .catch((error) => {
        console.error("Error fetching latest articles:", error);
      });
  };

  useEffect(() => {
    fetchLatestArticles()
  }, []);

	return (
		<>
			<div className="last-article-title-box">
				<div className="last-article-title">
					Derniers Articles
				</div>
			</div>
			<div className="last-article-container">
        {latestArticles.map((latestArticle) =>
          <ArticleCard
            key={latestArticle.id}
            title={latestArticle.title}
            text={latestArticle.bodyPreview}
            date={latestArticle.createdAt}
            imageUrl={latestArticle.imageUrl}
          />
        )}
			</div>
		</>
	);
};

export default LastArticle;
