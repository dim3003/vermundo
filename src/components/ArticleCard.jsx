import ReactMarkdown from "react-markdown";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ArticleCard.module.css';

const ArticleCard = ({ guid, title, text, date, imageUrl }) => {
	const formatDate = (isoString) => {
		const d = new Date(isoString);
		const day = String(d.getDate()).padStart(2, '0');
		const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
		const year = d.getFullYear();
		return `Paru le ${day}.${month}.${year}`;
	};

	return (
    <Link to={`articles/${guid}`} className={styles.articleCard}>
      <img src={imageUrl} alt="Article preview image" className={styles.articleImage} />
      <div className={styles.articleContent}>
        <h3 className={styles.articleTitle}>{title}</h3>
        <p className={styles.articleText}>
          <ReactMarkdown>
            {text}
          </ReactMarkdown>
        </p>
        <div className={styles.articleDate}>{formatDate(date)}</div>
      </div>
    </Link>
	);
};

ArticleCard.propTypes = {
  guid: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
};

export default ArticleCard;
