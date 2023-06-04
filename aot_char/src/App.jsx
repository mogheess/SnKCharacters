import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'

function App() {
  
  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  const getQuery = (q) => {
    setQuery(q);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get('https://api.jikan.moe/v4/anime/16498/characters');
        console.log(result.data);
        setAllItems(result.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
        setIsLoading(false);
      }
    };

    console.log(query);
    fetchItems();
  }, []);

  useEffect(() => {
    const filteredItems = allItems.filter((item) =>
      item.character.name.toLowerCase().includes(query.toLowerCase())
    );
    setItems(filteredItems);
  }, [query, allItems]);



  return (
    <div className='container'>
      <Header />
      <Search 
      getQuery = {getQuery}
      />
      <CharacterGrid
        isLoading={isLoading}
        items={items}
      />

    </div>
  )
}

export default App
