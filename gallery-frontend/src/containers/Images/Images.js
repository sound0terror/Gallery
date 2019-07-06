import React, {Component} from 'react';
import {connect} from "react-redux";
import Image from "../../components/Image/Image";
import {getImages} from "../../store/actions/actions";
import Preloader from "../../components/UI/Preloader/Preloader";

class Images extends Component {
  state = {
    show: false,
  };
  componentDidMount() {
    this.props.getImages();
  }

  render() {
    return (
      this.props.loading ? <Preloader/> :
      <div className='d-flex justify-content-between flex-wrap'>
        {this.props.images.map(image => {
          return <Image
            key={image._id}
            title={image.title}
            image={image.photo}
            author={image.author}
            user={this.props.user}

          />
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    images: state.images.images,
    loading: state.images.loading
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getImages: () => dispatch(getImages())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Images);