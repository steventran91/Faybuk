json.user do 
    json.partial! 'api/users/user', user: @user 
    if @user.profile_pic.attached?
        json.profile_pic url_for(@user.profile_pic)
    else
        json.profile_pic image_url("default_profile.png")
    end
    if @user.cover_photo.attached?
        json.cover_photo url_for(@user.cover_photo)
    else
        json.cover_photo nil 
    end
end

json.requests do 
    @user.sent_requests.each do |request|
        json.set! request.id do 
            json.partial! 'api/requests/request', request: request
        end
    end


    @user.received_requests.each do |request|
        json.set! request.id do 
            json.partial! 'api/requests/request', request: request 
        end
    end
end

json.friendships do 
    @user.friendships.each do |friend|
        json.set! friendship.id do 
            json.partial! 'api/friendships/friendship', friendship: friend
        end
    end
end