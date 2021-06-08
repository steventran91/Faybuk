export const requestAllPosts = (wallId) => {
    return (
        $.ajax({
            url: `/api/posts`,
            method: 'GET',
            data: {wallId}
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

export const updatePost = (post) => {
    return (
        $.ajax({
            url: `/api/posts/${post.id}`,
            method: 'PATCH',
            data: {post}
        })
    )
};

export const createPost = (post) => {
    return (
        $.ajax({
            url: '/api/posts',
            method: 'POST',
            data: {post}
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