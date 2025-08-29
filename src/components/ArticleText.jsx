import PropTypes from "prop-types";
import styles from "./ArticleText.module.css";

const ArticleText = ({ text }) => {
  const paragraphs = text.split(/\n\s*\n/); 

  return (
    <div className={styles.container}>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
};

ArticleText.propTypes = {
	text: PropTypes.string.isRequired,
};

export default ArticleText;
