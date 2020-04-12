import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class GameInfo extends Component {

 
    renderComments(comments) {
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
                    )
                })};      
                </div>
            );
        }
        return <div />;
     }

    renderGame(game) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={game.image} alt={game.name} />
                    <CardBody>
                        <CardTitle>{game.name}</CardTitle>
                        <CardText>{game.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    render() {
        if (this.props.game) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderGame(this.props.game)}
                        {this.renderComments(this.props.game.comments)}
                    </div>
                </div>
            )
        }
        return <div />;
    }
}

export default GameInfo;