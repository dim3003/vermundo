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

const paragraphs = [
	"Si vous lisez cet article, il est fort probable que vous prévoyez de partir prochainement au Laos ou que vous y soyez déjà. Super! C’est un pays fabuleux qui fait partie de mes top 3 lors d’un voyage en Asie du Sud-Est. Et ce pour de multiples raisons, que je détaillerai au fil de cet article.",
	"Mais avant toutes choses, il s’agit ici de vous présenter les trois endroits qui sont selon moi incontournables lors d’un voyage au Nord du Laos, plus de vous avertir sur quelques lieux qui ne valent pas le détour.",
	"Avant de commencer, voici quelques informations pratiques importantes avant de prévoir un voyage au Laos:"
];

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
			<ArticleText paragraphs={paragraphs}/>
			<ArticleSectionTitle sectionTitle={sectionTitle} />
			<ArticleText paragraphs={paragraphs}/>
			<ArticleBulletList items={bulletList} />
			<ArticleText paragraphs={paragraphs}/>
			<ArticleImage imageUrl={imageUrl} />
			<ArticleText paragraphs={paragraphs}/>
			<Footer />
		</>
	);
};

export default ArticlePage;
