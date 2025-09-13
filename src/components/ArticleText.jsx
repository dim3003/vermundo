import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import styles from "./ArticleText.module.css";

const ArticleText = ({ text }) => {
  return (
    <div className={styles.container}>
      <ReactMarkdown>
        {text}
      </ReactMarkdown>
    </div>
  );
};

ArticleText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ArticleText;

