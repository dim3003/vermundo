import { text } from "@fortawesome/fontawesome-svg-core";
import PropTypes from "prop-types";

const ArticleText = ({ text }) => {
	return (
		<div className="article-text-container">
      { text }
		</div>
	);
};

ArticleText.propTypes = {
	text: PropTypes.string.isRequired,
};

export default ArticleText;
