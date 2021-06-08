@users.each do |user|
    json.set! user.id do
        json.parital! "api/users/user" , user: user
    end
end

json.requests do 
    @users.each do |user|
        user.received_requests.each do |request|
            json.set! request.id do 
                json.partial! 'api/requests/request', request: request 
            end
        end
    end
end

json.friendships.each do 
    @users.each do |user|
        user.friendships.each do |friend|
            json.set! friend.id do 
                json.partial! 'api/friendships/friendship', friend: friend 
            end
        end
    end
end