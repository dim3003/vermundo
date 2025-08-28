import PropTypes from 'prop-types';
import styles from './ArticleCard.module.css';

const ArticleCard = ({ title, text, date, imageUrl }) => {
	const formatDate = (isoString) => {
		const d = new Date(isoString);
		const day = String(d.getDate()).padStart(2, '0');
		const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
		const year = d.getFullYear();
		return `Paru le ${day}.${month}.${year}`;
	};

	return (
		<div className={styles.articleCard}>
			<img src={imageUrl} alt="Scenic view" className={styles.articleImage} />
			<div className={styles.articleContent}>
				<div className={styles.articleTitle}>{title}</div>
				<p className={styles.articleText}>{text}</p>
				<div className={styles.articleDate}>{formatDate(date)}</div>
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