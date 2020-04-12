import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import GameInfo from './GameInfoComponent';
import { GAMES } from '../shared/games';


class Main extends Component {
    constructor(props) {
      super(props);
        this.state = {
          games: GAMES,
          selectedGame: null
        }
    }

    onGameSelect(gameId) {
        this.setState({selectedGame: gameId})
    }

  render() {
      return (
          <div>
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Board Game Cafe</NavbarBrand>
              </div>
              </Navbar>
              <Directory games={this.state.games} onClick={gameId => this.onGameSelect(gameId)}/>
              <GameInfo game={this.state.games.filter(game => game.id === this.state.selectedGame)[0]}/>
          </div>
      );
  }
}

export default Main;