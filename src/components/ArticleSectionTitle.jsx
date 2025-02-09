import PropTypes from "prop-types";
import "../style/ArticleSectionTitle.css";

const ArticleSectionTitle = ({sectionTitle}) => {
	return (
		<div className="article-section-title-container">
			<h2 className="article-section-title">{sectionTitle}</h2>
		</div>
	);
};

ArticleSectionTitle.propTypes = {
	sectionTitle: PropTypes.string.isRequired,
};

export default ArticleSectionTitle;
