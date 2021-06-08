json.extract! post, :id, :body, :created_at, :wall_id

# json.creator do 
#     user = post.creator 
#     json.extract! user, :id, :first_name, :last_name
#     json.profilePic url_for(user.profile_pic) if user.profile_pic.attached?
end

# json.comments post.comments.each do |comment|
#     if (!comment.parent_id)
#             json.partial! 'api/comments/comment.json', comment: comment 
#     end
# end

