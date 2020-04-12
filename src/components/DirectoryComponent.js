import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import GameInfo from './GameInfoComponent';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGame: null
        };
    };

    onGameSelect(game) {
        this.setState({selectedGame: game})
    }

    // renderSelectedGame(game) {
    //     if (game) {
    //         return (
    //             <Card>
    //                 <CardImg top src={game.image} alt={game.name} />
    //                 <CardBody>
    //                     <CardTitle>{game.name}</CardTitle>
    //                     <CardText>{game.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     }
    //     return <div />;
    // }

    render() {
        const directory = this.props.games.map(game => {
            return (
                <div key={game.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onGameSelect(game)}>
                        <CardImg width="100%" src={game.image} alt={game.name}/>
                        <CardImgOverlay>
                            <CardTitle>{game.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <GameInfo game={this.state.selectedGame}/>
            </div>
        );
    }
}


export default Directory;