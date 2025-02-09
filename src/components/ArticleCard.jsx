import PropTypes from "prop-types";
import "../style/ArticleCard.css";

const ArticleCard = ({ title, text, date, imageUrl }) => {
	return (
		<a href="article" className="article-card-link">
			<div className="article-card">
				<img
					src={`/images/${imageUrl}`}
					alt="Scenic view"
					className="article-card-image"
				/>
				<div className="article-card-content">
					<div className="article-card-title">
						{title}
					</div>
					<p className="article-card-text">{text}</p>
					<div className="article-card-date">{date}</div>
				</div>
			</div>
		</a>
	);
};

ArticleCard.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
};

export default ArticleCard;
