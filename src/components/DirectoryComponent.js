import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({game, onClick}) {
    return (
        <Card onClick={() => onClick(game.id)}>
            <CardImg width="100%" src={game.image} alt={game.name}/>
            <CardImgOverlay>
                <CardTitle>{game.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {
   
        const directory = props.games.map(game => {
            return (
                <div key={game.id} className="col-md-5 m-1">
                    <RenderDirectoryItem game={game} onClick={props.onClick}/>
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


export default Directory;