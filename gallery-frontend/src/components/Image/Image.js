import React from 'react';
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import PropTypes from 'prop-types';
import config from '../../config';

const Image = (props) => {
  return (
      <Card style={{width: '18rem', marginBottom: '20px'}}>
        <CardImg onClick={props.showPic} top width="100%" src={config.imageURL + props.image} alt={props.title} />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>Published by: {props.author.username}</CardText>
        </CardBody>
        {props.user && props.author._id === props.user._id ? <Button onClick={props.deleteImage}>Delete image</Button> : null}
      </Card>
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