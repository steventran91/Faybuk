json.partial! 'api/friendships/friendship', friendship: @friendship

json.friend do 
    json.set! friend.id do 
        json.partial! 'friendship', friend: @friend 
    end
end

json.reverse_friendship do 
    json.set! @reverse_friendship.id do 
        json.extract! @reverse_friendship, :id, :user_id, :friend_id 
    end
end

if @request 
    json.request do 
        json.set! @request.id do 
            json.partial! 'api/requests/request', request: @request 
        end
    end
end