import styles from "./ArticleTitle.module.css";
import PropTypes from "prop-types";

const ArticleTitle = ({ title }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{title}</h1>
		</div>
	);
};

ArticleTitle.propTypes = {
	title: PropTypes.string.isRequired,
};

export default ArticleTitle;
