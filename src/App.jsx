import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/App.css";
import HomePage from "./pages/HomePage"
import ArticlePage from "./pages/ArticlePage"

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/article" element={<ArticlePage />} />
			</Routes>
		</Router>
	);
}

export default App;
