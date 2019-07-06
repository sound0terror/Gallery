import React, {Component} from 'react';
import ImageForm from "../../components/ImageForm/ImageForm";
import {connect} from "react-redux";
import {createImage} from "../../store/actions/actions";

class NewImage extends Component{
  render() {
    return (
      <ImageForm
        submitForm={this.props.createImage}
        author={this.props.user._id}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    createImage: (image) => dispatch(createImage(image))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(NewImage);