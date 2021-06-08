json.user do 
    json.partial! 'api/users/user', user: @user 
end

json.requests do 
    @user.received_requests.each do |request|
        json.set! request.id do 
            json.partial! 'api/requests/request', request: request 
        end
    end
end

json.friendships do 
    @user.friendships.each do |friend|
        json.set! friend.id do 
            json.partial! 'api/friendships/friendship', friend: friend
        end
    end
end