@users.each do |user|
    json.set! user.id do
        json.parital! "api/users/user" , user: user
    end
end