import PropTypes from "prop-types";

const ArticleTitle = ({ title, subtitle }) => {
	return (
		<div className="article-title-container">
			<h1 className="article-title">{title}</h1>
			<h2 className="article-subtitle">{subtitle}</h2>
		</div>
	);
};

ArticleTitle.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
};

export default ArticleTitle;
