class FriendRequest < ApplicationRecord
    validates :requester_id, :requested_id, presence:true
    validates :requested_id, uniqueness: {scope: :requester_id,
        message: "User already has a pending friend request"}

    belongs_to :requester,
        class_name: :User 
    
    belongs_to :requested,
        class_name: :User 
end


