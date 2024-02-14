import { useState, useEffect, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';

import './App.css';

export type Monster = {
  id: string,
  name: string,
  email: string
}

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchField = e.target.value.toLocaleLowerCase();
    setSearchField(searchField)
  }

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  })

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rodolex</h1>
      <SearchBox className="monsters-search-box" onChangeHandler={onSearchChange} placeholder='search monsters' />
      <CardList monsters={filteredMonsters} />
    </div>
  )

}

export default App;
