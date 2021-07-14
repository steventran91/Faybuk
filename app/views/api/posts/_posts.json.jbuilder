json.extract! post, :author_id, :id, :body, :wall_id, :created_at

# json.creator do 
#     user = post.creator 
#     json.extract! user, :id, :first_name, :last_name
#     json.profilePic url_for(user.profile_pic) if user.profile_pic.attached?
# end

# json.comments post.comments.each do |comment|
#     if (!comment.parent_id)
#             json.partial! 'api/comments/comment.json', comment: comment 
#     end
# end

