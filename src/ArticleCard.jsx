import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ title, text, date, imageUrl }) => {
	    return (
		            <div className="article-card">
		                <img src={`/images/${imageUrl}`} alt="Scenic view" className="article-image" />
		                <div className="article-content">
		                    <div className="article-title">{title}</div>
		                    <p className="article-text">{text}</p>
		                    <div className="article-date">{date}</div>
		                </div>
		            </div>
		        );
};

export default ArticleCard;
