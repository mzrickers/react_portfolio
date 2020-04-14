import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({game}) {
    return (
        <Card >
            <Link to={`/directory/${game.id}`}>
                <CardImg width="100%" src={game.image} alt={game.name}/>
                <CardImgOverlay>
                    <CardTitle>{game.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {
   
        const directory = props.games.map(game => {
            return (
                <div key={game.id} className="col-md-5 m-1">
                    <RenderDirectoryItem game={game}/>
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