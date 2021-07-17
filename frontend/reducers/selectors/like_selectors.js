export const getLikesOfLike = (likes, like_id, like_type) => {
  let result = [];
  for (let id in likes) {
    if (
      likes[id].like_id === parseInt(like_id) &&
      likes[id].like_type === like_type
    ) {
      result.push(likes[id]);
    }
  }
  return result;
};

export const getLikesFromComments = (likes, commentArray) => {
  let result = [];
  for (let id in likes) {
    if (
      commentArray.includes(likes[id].like_id) &&
      likes[id].like_type === "Comment"
    ) {
      result.push(likes[id]);
    }
  }
  return result;
};

export const findLike = (likes, like_id, like_type, user_id) => {
  for (let id in likes) {
    let like = likes[id];
    if (
      like.like_id === like_id &&
      like.like_type === like_type &&
      like.user_id === user_id
    ) {
      return like;
    }
  }
  return false;
};
