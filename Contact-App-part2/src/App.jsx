import React from 'react';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      data: [],
      filterData: [],
      theme: false,
    }

    this.handleTheme = this.handleTheme.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.filtro = this.filtro.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts');
    const data = await response.json();
    this.setState({ data, filterData: data });
  }

  handleTheme() {
    const { theme } = this.state;
    this.setState({ theme: !theme });
    if (!theme) {
      document.body.classList.add('dark__body');      
    } else {
      document.body.classList.remove('dark__body');
    }
  }

  handleSearch(event) {
    const search = event.target.value;
    this.setState({ search });
    this.filtro(search);
  }

  filtro(search) {
    const { data } = this.state;
    let filtrado = data.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()));
    this.setState({ filterData: filtrado });
  }

  handleClick(type) {
    const { filterData } = this.state;
    let filtrado = filterData.sort((item1, item2) => {
      return item2[type] > item1[type] ? -1 : 1 
    });
    this.setState({ filterData: filtrado })
  }

  render() {
    const { filterData, search, theme } = this.state;
    return (
      <div className="app" data-testid="app">
        <Topbar handleTheme={this.handleTheme} theme={theme} />

        <Filters handleSearch={this.handleSearch} value={this.state.search} handleClick={this.handleClick} />

        <Contacts filterData={filterData} search={search} theme={theme} />
      </div>
    )
  }
}

export default App;
