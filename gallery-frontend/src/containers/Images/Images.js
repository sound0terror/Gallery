import React, {Component} from 'react';
import {connect} from "react-redux";
import Image from "../../components/Image/Image";
import {deleteImage, getCurrentImage, getImages} from "../../store/actions/actions";
import Preloader from "../../components/UI/Preloader/Preloader";
import Modal from "../../components/UI/Modal/Modal";

class Images extends Component {
  state = {
    show: false,
  };
  componentDidMount() {
    this.props.getImages();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  showPic = (imageId) =>  {
    this.setState({show: true});
    this.props.showPic(imageId)
  };
  purchaseCancelHandler = () => {
    this.setState({show: false});
  };
  render() {
    return (
      this.props.loading ? <Preloader/> :
      <div className='d-flex justify-content-between flex-wrap'>
        {this.props.images.map(image => {
          return <Image
            key={image._id}
            showPic={() => {this.showPic(image._id)}}
            title={image.title}
            image={image.photo}
            author={image.author}
            user={this.props.user}
            deleteImage={() => {this.props.deleteImage(image._id)}}
          />
        })}
        <Modal
          show={this.state.show}
          image={this.props.image.photo}
          closed={this.purchaseCancelHandler}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    images: state.images.images,
    loading: state.images.loading,
    image: state.images.image
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getImages: () => dispatch(getImages()),
    showPic: (imageId) => dispatch(getCurrentImage(imageId)),
    deleteImage: (imageId) => dispatch(deleteImage(imageId))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Images);