import { useState } from 'react'
import './App.css'
import Header from './Header';
import LastArticle from './LastArticle';
import About from './About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
	  <Header />
	  <LastArticle />
	  <About />
    </div>
  )
}

export default App
