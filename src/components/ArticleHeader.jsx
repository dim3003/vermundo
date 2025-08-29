import logoStyles from "./Logo.module.css";
import articleHeaderStyles from "./ArticleHeader.module.css";

const ArticleHeader = () => {
	return (
		<div className={articleHeaderStyles.container}>
      <a href="/">
        <div className={logoStyles.logo}>VERMUNDO</div>
      </a>
		</div>
	);
};

export default ArticleHeader;
