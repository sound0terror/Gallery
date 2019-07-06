import React from 'react';
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import PropTypes from 'prop-types';
import config from '../../config';

const Image = (props) => {
  return (
    <div>
      <Card style={{width: '18rem', paddingBottom: '20px'}}>
        <CardImg onClick={props.showPic} top width="100%" src={config.imageURL + props.image} alt={props.title} />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>Published by: {props.author.username}</CardText>
        </CardBody>
        {props.author._id === props.user._id ? <Button>Button</Button> : null}
      </Card>
    </div>
  )
};
Image.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.object,
  user: PropTypes.object,
  showPic: PropTypes.func
};
export default Image;