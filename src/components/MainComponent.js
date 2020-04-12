import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import GameInfo from './GameInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
              <Header />
              <Directory games={this.state.games} onClick={gameId => this.onGameSelect(gameId)}/>
              <GameInfo game={this.state.games.filter(game => game.id === this.state.selectedGame)[0]}/>
              <Footer />
          </div>
      );
  }
}

export default Main;