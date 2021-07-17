json.partial! 'api/posts/post'. post: @post

if @post.photo
    json.photo url_for(@post.photo)
end
