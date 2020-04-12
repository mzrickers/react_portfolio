import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import { GAMES } from './shared/games';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);
        this.state = {
          games: GAMES
        }
    }
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Board Game Cafe</NavbarBrand>
              </div>
              </Navbar>
              <Directory games={this.state.games}/>
          </div>
      );
  }
}

export default App;
