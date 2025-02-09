import PropTypes from "prop-types";
import "../style/ArticleImage.css";

const ArticleImage = ({ imageUrl }) => {
	return (
		<div className="article-image-container">
			<img
				src={`/images/${imageUrl}`}
				alt="Scenic view"
				className="article-image"
			/>
		</div>
	);
};

ArticleImage.propTypes = {
	imageUrl: PropTypes.string.isRequired,
};

export default ArticleImage;
