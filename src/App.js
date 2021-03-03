import React, {useState, useEffect} from 'react'
import axios from 'axios'  //Axios return a promise
import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'

const App = () => {
  const [items, setItems] = useState([])       //on doit definir l'element state qui viens de l'API(items) setItems est la function   pour manipuler le state
  const [isLoading,  setIsLoading] = useState(true)
  const [query,  setQuery] = useState('')

  useEffect(()=>{
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems() //on doit appeler la function
    
  },[query])
  return (<div className="container">
     <Header />
     <Search getQuery={(q)=> setQuery(q)} />
     <CharacterGrid isLoading={isLoading} items={items}/>
  </div>
  )
      
    
  
}

export default App;
