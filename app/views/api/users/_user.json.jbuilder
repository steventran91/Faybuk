json.extract! user, :id, :first_name, :last_name, :email, :birthdate, :gender
# json.extract! user, :city if user.city
# json.profilePic url_for(user.profile_pic) if user.profile_pic.attached?
# json.coverPhoto url_for(user.cover_photo) if user.cover_photo.attached?
# json.received_requests user.received_requests.pluck(:receiver_id)
# json.sent_requests user.sent_requests.pluck(:sender_id)

json.posts user.posts.each do |post|
    json.partial! "/api/posts/post.json", post: post 
end