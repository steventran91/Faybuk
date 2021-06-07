@friends.each do |friend|
    json.set! friend.id do 
        json.partial! 'friendship', friend: friend 
    end
end