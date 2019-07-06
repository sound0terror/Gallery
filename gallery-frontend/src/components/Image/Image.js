import React from 'react';
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

const Image = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image} alt={props.title} />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>Published by: {props.author.username}</CardText>
        </CardBody>
        {props.author._id === props.user._id ? <Button>Button</Button> : null}
      </Card>
    </div>
  )
};

export default Image;