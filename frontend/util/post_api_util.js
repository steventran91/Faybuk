export const publishPost = (formData) => {
  return $.ajax({
    url: "/api/posts",
    method: "POST",
    data: formData,
    contentType: false,
    processData: false
  });
};

export const deletePost = (postId) => {
  return $.ajax({
    url: `/api/posts/${postId}`,
    method: "DELETE"
  });
};

export const editPost = (formData) => {
  return $.ajax({
    url: `/api/posts/${formData.get("post[id]")}`,
    method: "PATCH",
    data: formData,
    contentType: false,
    processData: false
  });
};

export const getPosts = (data) => {
  return $.ajax({
    url: "/api/posts",
    method: "GET",
    data
  });
};

