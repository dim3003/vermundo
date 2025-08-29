import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticleHeader from "../../components/ArticleHeader";
import ArticleTitle from "../../components/ArticleTitle";
import ArticleText from "../../components/ArticleText";
import Footer from "../../components/Footer";


const Article = () => {
  const { guid } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/articles/${guid}`)
        .then((response) => {
        console.log(response);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
        console.log(data);
        setArticle(data)})
        .catch((err) => setError(err.message));
  }, [guid]);

  if (error) {
    return <div>Error loading article: {error}</div>
  }

  if(!article){
    return <div>Loading...</div>
  }

	return (
		<>
			<ArticleHeader imageUrl={article.imageUrl}/>
			<ArticleTitle title={article.title} /> 
			<ArticleText text={article.body}/>
			<Footer />
		</>
	);
};

export default Article;
