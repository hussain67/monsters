import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(resp => {
      return resp.json().then(monsters => {
        this.setState({ monsters });
      });
    });
  }
  onSearchChange = event => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));

    return (
      <div className="App">
        <input type="search" className="search-box" placeholder="search monsters" onChange={onSearchChange} />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
