import PropTypes from "prop-types";
import logoStyles from "./Logo.module.css";
import articleHeaderStyles from "./ArticleHeader.module.css";

const ArticleHeader = ({ imageUrl }) => {
	return (
		<div className={articleHeaderStyles.container} style={{backgroundImage: `url(${imageUrl})`}}>
      <a href="/">
        <div className={logoStyles.logo}>VERMUNDO</div>
      </a>
		</div>
	);
};


ArticleHeader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ArticleHeader;
