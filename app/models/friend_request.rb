class FriendRequest < ApplicationRecord
    validates :requester_id, :requested_id, presence:true
    validates :requested_id, uniqueness: {scope: :requester_id,
        message: "User already has a pending friend request"}

    belongs_to :requester,
        primary_key: :id,
        foreign_key: :requester_id,
        class_name: :User 
    
    belongs_to :requested,
        primary_key: :id,
        foreign_key: :requested_id,
        class_name: :User 
end


