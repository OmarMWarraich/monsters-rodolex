import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState({ searchField });
  }
  
  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    
    const filterMonsters = monsters.filter((monster) => {
          return monster.name.toLowerCase().includes(searchField);
        }
        )
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rodolex</h1>
        <SearchBox className='monsters-search-box' handleChange={onSearchChange} placeholder='search monsters' />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}
export default App;
