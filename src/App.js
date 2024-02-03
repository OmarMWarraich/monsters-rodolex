import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  const onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    setSearchField(searchField)
  }

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  })

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rodolex</h1>
      <SearchBox className="monsters-search-box" handleChange={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  )

}

export default App;
