import React from "react";
import "./LastArticle.css";
import ArticleCard from "./ArticleCard";

const LastArticle = () => {
	return (
		<>
			<div className="last-article-title-box">
				<div className="last-article-title">
					Derniers Articles
				</div>
			</div>
			<div className="last-article-container">
				<ArticleCard
					title="Titre"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae convallis ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae convallis ex."
					date="Date de parution"
					imageUrl="halongBay.jpeg"
				/>
				<ArticleCard
					title="Titre"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae convallis ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae convallis ex."
					date="Date de parution"
					imageUrl="halongBay.jpeg"
				/>
				<ArticleCard
					title="Titre"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae convallis ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae convallis ex."
					date="Date de parution"
					imageUrl="halongBay.jpeg"
				/>
			</div>
		</>
	);
};

export default LastArticle;
