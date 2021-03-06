import React from 'react';
import {connect} from 'react-redux';
import { createLike, deleteLike } from '../../actions/like_actions';
import { findLike } from '../../reducers/selectors/like_selectors';

const mapStateToProps = (state, ownProps) => {
    return {
        like: findLike(state.entities.likes, ownProps.likeable_id, ownProps.likeable_type, ownProps.user_id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId))
    }
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleLike() {
    if (this.props.like) {
      this.props.deleteLike(this.props.like.id);
    } else {
      this.props.createLike({
        likeable_id: this.props.likeable_id,
        likeable_type: this.props.likeable_type,
        user_id: this.props.user_id,
      });
    }
  }
  
  // componentWillUnmount(){
  //   this.props.deleteLike;
  // }

  render() {
    if (this.props.likeable_type === "Comment") {
      return (
        <div
          id={this.props.like ? "does-like" : ""}
          className="comment-like"
          onClick={this.toggleLike}
        >
          Like
        </div>
      );
    }
    return (
      <button
        id={this.props.like ? "does-like" : ""}
        className="option-btn"
        onClick={this.toggleLike}
      >
        <i className="far fa-thumbs-up"></i>
        <div>Like</div>
      </button>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);