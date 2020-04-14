import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderGame({game}) {
    return (
        <div key={game.id} className="col-md-5 m-1">
            <Card >
                <CardImg  top src={game.image} alt={game.name} />
                <CardBody>
                    <CardTitle>{game.name}</CardTitle>
                    <CardText>{game.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}


function RenderComments({comments}) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment => {
                return (
                    <div key={comment.id} >
                        <p>{comment.text}<br/> 
                        -- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                );
            })}      
            </div>
        )
    }
    return <div />;
}

 
function GameInfo(props) {
    if (props.game) {
        return (
            <div className="container">
                <div className="row">
                    <RenderGame game={props.game} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        )
    }
    return <div />;
}


export default GameInfo;