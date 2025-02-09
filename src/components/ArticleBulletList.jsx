import PropTypes from "prop-types";
import "../style/ArticleBulletList.css";

const ArticleBulletList = ({ items }) => {
  return (
    <div className="article-bullet-list">
      <ul className="article-bullet-list-content">
        {items.map((item, index) => (
          <li key={index} className="article-bullet-item">
            <strong>{item.title}: </strong>
            <span>{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

ArticleBulletList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ArticleBulletList;

