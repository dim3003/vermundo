import ArticleHeader from "../components/ArticleHeader";
import ArticleTitle from "../components/ArticleTitle";
import ArticleText from "../components/ArticleText";
import ArticleBulletList from "../components/ArticleBulletList";

const data = [
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
  }
];


const ArticlePage = () => {
	return (
		<>
			<ArticleHeader />
			<ArticleTitle />
			<ArticleText />
			<ArticleBulletList items={data}/>
		</>
	);
};

export default ArticlePage;
