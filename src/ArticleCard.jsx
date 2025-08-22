import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ title, text, date, imageUrl }) => {
      const formatDate = (isoString) => {
          const d = new Date(isoString);
          const day = String(d.getDate()).padStart(2, '0');
          const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
          const year = d.getFullYear();
          return `Paru le ${day}.${month}.${year}`;
      };

	    return (
		            <div className="article-card">
		                <img src={imageUrl} alt="Scenic view" className="article-image" />
		                <div className="article-content">
		                    <div className="article-title">{title}</div>
		                    <p className="article-text">{text}</p>
		                    <div className="article-date">{formatDate(date)}</div>
		                </div>
		            </div>
		        );
};

export default ArticleCard;
