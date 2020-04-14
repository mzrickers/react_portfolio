import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import GameInfo from './GameInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GAMES } from '../shared/games';
import { COMMENTS } from '../shared/comments';
import { DECORS } from '../shared/decors';
import { TREATS } from '../shared/treats';


class Main extends Component {
    constructor(props) {
      super(props);
        this.state = {
          games: GAMES,
          comments: COMMENTS,
          decors: DECORS,
          treats: TREATS
        }
    }

  render() {

    const HomePage = () => {
        return (
            <Home 
            game={this.state.games.filter(game => game.featured)[0]}
            decor={this.state.decors.filter(decor => decor.featured)[0]}
            treat={this.state.treats.filter(treat => treat.featured)[0]}
            />
        );
    }

    const GameWithId = ({match}) => {
        return (
          <GameInfo 
            game={this.state.games.filter(game => game.id ===
            +match.params.gameId)[0]}
            comments={this.state.comments.filter(comment => comment.gameId ===
            +match.params.gameId)}
          />
        );
    }
    
      return (
          <div>
              <Header />
              <Switch>
                  <Route path='/home' component={HomePage} />
                  <Route exact path='/directory' render={() => <Directory games={this.state.games} /> } />
                  <Route path='/directory/:gameId' component={GameWithId} />
                  <Route exact path='/contactus' component={Contact} />
                  <Redirect to='/home' />
              </Switch>
              <Footer />
          </div>
      );
  }
}

export default Main;