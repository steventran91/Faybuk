class Friendship < ApplicationRecord
    validates :user_id, :friend_id, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User 

    belongs_to :friend,
    primary_key: :id, 
    foreign_key: :friend_id,
    class_name: :User 

    def corresponding_friendship
        friendship = Friendship.find_by(friend_id: self.user_id, user_id: self.friend_id)
    end
    
end
