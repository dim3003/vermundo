import { useState } from 'react'
import './App.css'
import Header from './Header';
import LastArticle from './LastArticle';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
	  <Header />
	  <LastArticle />
    </div>
  )
}

export default App
