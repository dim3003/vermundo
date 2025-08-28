import ArticleHeader from "../../components/ArticleHeader";
import ArticleTitle from "../../components/ArticleTitle";
import ArticleText from "../../components/ArticleText";
import Footer from "../../components/Footer";

const Article = () => {
	return (
		<>
			<ArticleHeader imageUrl={"cat.jpeg"}/>
			<ArticleTitle title={"title"} /> 
			<ArticleText text={"text wiiiiwiii"}/>
			<Footer />
		</>
	);
};

export default Article;
