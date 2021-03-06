json.user do 
    json.partial! 'api/users/user', user: @user 
    if @user.profile_pic
        json.profile_pic url_for(@user.profile_pic)
    else
        json.profile_pic image_url("default_profile.png")
    end
    if @user.cover_photo
        json.cover_photo url_for(@user.cover_photo)
    else
        json.cover_photo nil 
    end
end

json.friend_requests do
    @user.outgoing_friend_requests.each do |friend_request|
        json.set! friend_request.id do
            json.partial! 'api/friend_requests/friend_request', friend_request: friend_request
        end
    end
    # to do: fix later
    @user.received_friend_requests.each do |friend_request|
        json.set! friend_request.id do 
            json.partial! 'api/friend_requests/friend_request', friend_request: friend_request
        end
    end
end

json.friendships do 
    @user.friendships.each do |friendship|
        json.set! friendship.id do 
            json.partial! 'api/friendships/friendship', friendship: friendship 
        end
    end
end