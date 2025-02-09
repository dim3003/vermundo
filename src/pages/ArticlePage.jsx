import ArticleHeader from "../components/ArticleHeader";
import ArticleTitle from "../components/ArticleTitle";
import ArticleSectionTitle from "../components/ArticleSectionTitle";
import ArticleText from "../components/ArticleText";
import ArticleImage from "../components/ArticleImage";
import ArticleBulletList from "../components/ArticleBulletList";
import Footer from "../components/Footer";

const title = "2 semaines au nord du Laos";
const subtitle = "un itinéraire tout en douceur";
const sectionTitle = "Luang Prabang, jours 1-4";
const imageUrl = "halongBay.jpeg";

const bulletList = [
	{
		title: "Visa",
		description:
			"Les voyageurs munis d’un passeport belge ou français doivent obtenir un visa pour entrer au Laos. Les ressortissants suisses sont exemptés de visa pour un séjour de moins de 15 jours.",
	},
	{
		title: "Monnaie et paiement",
		description:
			"Le kip laotien est la monnaie locale. Toujours avoir du cash sur soi, car la carte bancaire n'est pas acceptée partout. Des distributeurs sont disponibles en ville et à l’aéroport.",
	},
	{
		title: "Transports",
		description:
			"Train, bus, 'loca' (équivalent local d'Uber) et vols internes permettent de se déplacer facilement.",
	},
	{
		title: "Langue",
		description:
			"L’anglais est bien compris et couramment pratiqué.",
	},
];


const ArticlePage = () => {
	return (
		<>
			<ArticleHeader />
			<ArticleTitle title={title} subtitle={subtitle}/>
			<ArticleText />
			<ArticleSectionTitle sectionTitle={sectionTitle} />
			<ArticleText />
			<ArticleBulletList items={bulletList} />
			<ArticleText />
			<ArticleImage imageUrl={imageUrl} />
			<ArticleText />
			<Footer />
		</>
	);
};

export default ArticlePage;
