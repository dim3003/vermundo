import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Article from './pages/Article/Article';
import ConfirmNewsletter from './pages/Newsletter/ConfirmNewsletter';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/articles/:guid" element={<Article />} />
        <Route path="/confirm-newsletter/:token" element={<ConfirmNewsletter />} /> 
			</Routes>
		</BrowserRouter>
	);
}

export default App;
