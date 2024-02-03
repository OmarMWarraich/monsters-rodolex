import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { toHaveStyle } from '@testing-library/jest-dom/matchers';

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
        <input className='search' type='search' placeholder='search monsters' onChange={onSearchChange}/>
        {
          filterMonsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))
        }
      </div>
    );
  }
}
export default App;
