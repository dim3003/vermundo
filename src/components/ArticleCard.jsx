import PropTypes from "prop-types";
import "../style/ArticleCard.css";

const ArticleCard = ({ title, text, date, imageUrl }) => {
	return (
		<div className="article-card">
			<img
				src={`/images/${imageUrl}`}
				alt="Scenic view"
				className="article-image"
			/>
			<div className="article-content">
				<div className="article-title">{title}</div>
				<p className="article-text">{text}</p>
				<div className="article-date">{date}</div>
			</div>
		</div>
	);
};

ArticleCard.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
};

export default ArticleCard;
