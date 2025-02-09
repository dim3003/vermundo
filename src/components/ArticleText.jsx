import PropTypes from "prop-types";
import "../style/ArticleText.css";

const ArticleText = ({ paragraphs }) => {
	return (
		<div className="article-text-container">
			{paragraphs.map((text, index) => (
				<p key={index}>{text}</p>
			))}
		</div>
	);
};

ArticleText.propTypes = {
	paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ArticleText;
