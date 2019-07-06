import React, {Component} from 'react';
import {connect} from "react-redux";
import Image from "../../components/Image/Image";
import {deleteImage, getCurrentImage, getImagesByAuthorId} from "../../store/actions/actions";
import Preloader from "../../components/UI/Preloader/Preloader";
import Modal from "../../components/UI/Modal/Modal";

class Images extends Component {
  state = {
    show: false,
  };
  componentDidMount() {
    this.props.getImagesByAuthorId(this.props.match.params.authorId);
  }
  showPic = (imageId) =>  {
    this.setState({show: true});
    this.props.showPic(imageId)
  };
  deletePic = async(imageId) => {
    await this.props.deleteImage(imageId);
    this.props.getImagesByAuthorId(this.props.match.params.authorId);
  };
  purchaseCancelHandler = () => {
    this.setState({show: false});
  };
  changeLocation = (authorId) => {
    this.props.history.push('/images/author/' + authorId)
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
              changeLocation={() => {this.changeLocation(image.author._id)}}
              author={image.author}
              user={this.props.user}
              deleteImage={() => {this.deletePic(image._id)}}
            />
          })}
          {this.props.image.photo ?         <Modal
            show={this.state.show}
            image={this.props.image.photo}
            closed={this.purchaseCancelHandler}
          /> : null
          }

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
    getImagesByAuthorId: (authorId) => dispatch(getImagesByAuthorId(authorId)),
    showPic: (imageId) => dispatch(getCurrentImage(imageId)),
    deleteImage: (imageId) => dispatch(deleteImage(imageId))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Images);