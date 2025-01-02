import { useState } from "react";
import "./App.css";
import Header from "./Header";
import LastArticle from "./LastArticle";
import About from "./About";
import Footer from "./Footer";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Header />
			<LastArticle />
			<About />
			<Footer />
		</div>
	);
}

export default App;
