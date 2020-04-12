import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Directory extends Component {
   
    render() {
        const directory = this.props.games.map(game => {
            return (
                <div key={game.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(game.id)}>
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
            </div>
        );
    }
}


export default Directory;