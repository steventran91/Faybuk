export const requestAllPosts = (data) => {
    return (
        $.ajax({
            url: `/api/posts`,
            method: 'GET',
            data
        })
    )
};

export const requestPost = (postId) => {
    return (
        $.ajax({
            url: `/api/posts/${postId}`,
            method: 'GET'
        })
    )
};

export const updatePost = (formData) => {
    return $.ajax({
      url: `/api/posts/${formData.get("post[id]")}`,
      method: "PATCH",
      data: formData,
      contentType: false,
      processData: false 
    });
};

export const createPost = (formData) => {
    return (
        $.ajax({
            url: '/api/posts',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false 
        })
    )
};

export const deletePost = (postId) => {
    return (
        $.ajax({
            url: `/api/posts/${postId}`,
            method: 'DELETE'
        })
    )
};