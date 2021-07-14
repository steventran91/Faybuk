json.user do 
    json.extract! user, :first_name, :last_name, :email, :birthdate, :gender
    if user.profile_pic.attached?
        json.profile_pic url_for(user.profile_pic)
    else
        json.profile_pic image_url("default_profile.png")
    end
    if user.cover_photo.attached?
        json.cover_photo url_for(user.cover_photo)
    else
        json.cover_photo nil 
    end
end

json.requests do 
    user.sent_requests.each do |request|
        json.set! request.id do 
            json.extract! request, :sender_id, :receiver_id, :id, :created_at
        end
    end

    user.received_requests.each do |request|
        json.set! request.id do 
            json.extract! request, :sender_id, :receiver_id, :id, :created_at
        end
    end
end

json.friendships do 
    user.friendships.each do |friendship|
        json.set! friendship.id do 
            json.extract! friendship, :user_id, :friend_id, :id, :created_at
        end
    end
end
