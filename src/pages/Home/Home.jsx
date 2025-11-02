import HomeHeader from '../../components/HomeHeader';
import LastArticle from '../../components/LastArticle';
import About from '../../components/About';
import Footer from '../../components/Footer';
import HomeIntroduction from '../../components/HomeIntroduction';
import Newsletter from '../../components/Newsletter';

function Home() {
	return (
		<div>
			<HomeHeader />
      <HomeIntroduction />
			<LastArticle />
			<About />
      <Newsletter />
			<Footer />
		</div>
	);
}

export default Home;
