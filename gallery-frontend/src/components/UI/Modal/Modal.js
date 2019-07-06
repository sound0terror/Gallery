import React, {Fragment} from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";
import {Button} from "reactstrap";
import config from '../../../config';
const Modal = props => {
  return (
    <Fragment>
      <Backdrop
        show={props.show}
        closed={props.closed}
      />
      <div
        className="Modal"
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? 1 : 0
        }}
      >
        <Button onClick={props.closed} close />
        <img style={{width: "100%"}} src={config.imageURL + props.image} alt={props.title}/>
      </div>
    </Fragment>
  );
};

export default Modal;
