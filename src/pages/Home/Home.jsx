import HomeHeader from '../../components/HomeHeader';
import LastArticle from '../../components/LastArticle';
import About from '../../components/About';
import Footer from '../../components/Footer';
import HomeIntroduction from '../../components/HomeIntroduction';

function Home() {
	return (
		<div>
			<HomeHeader />
      <HomeIntroduction />
			<LastArticle />
			<About />
			<Footer />
		</div>
	);
}

export default Home;
