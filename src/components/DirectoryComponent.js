import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [
                {
                    id: 0,
                    name: 'Boardgames',
                    image: 'assets/react_images/gameCopy.jpeg',
                    description: "Came hang with friends and play our wide assortment of games"
                },
                {
                  id: 1,
                  name: 'Dungeons and Dragons',
                  image: 'assets/react_images/DndCopy.jpg',
                  description: "Create your own character and join a world full and fantasy and magic."
                },
                {
                    id: 2,
                    name: 'Magic the Gathering',
                    image: 'assets/react_images/mtgCopy.jpg',
                    description: "Join our tournaments to see if your skills stack up."
                },
                {
                    id: 3,
                    name: 'Pokemon',
                    image: 'assets/react_images/pokemonCopy.jpeg',
                    description: "Whether you want to battle out using cards or cartridges we have it all!  Do you want to be the best?"
                }
            ],
        };
    };

    render() {
        const directory = this.state.games.map(game => {
            return (
                <div key={game.id} className="col">
                    <img src={game.image} alt={game.name}/>
                    <h2>{game.name}</h2>
                    <p>{game.description}</p>
                </div>
            );
        })

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;