import {useState, useEffect} from 'react'
import styles from "./LastArticle.module.css";
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
			<div className={styles.lastArticleTitleBox}>
				<div className={styles.lastArticleTitle}>
					Derniers Articles
				</div>
			</div>
			<div className={styles.lastArticleContainer}>
        {latestArticles.map((latestArticle) =>
          <ArticleCard
            key={latestArticle.id}
            guid={latestArticle.id}
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
