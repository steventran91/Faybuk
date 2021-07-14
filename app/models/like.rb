class Like < ApplicationRecord
    validates :like_id, :like_type, :user_id, presence: true 
    validates :user_id, uniqueness: {scope: [:like_id, :like_type]}

    belongs_to :like,
    polymorphic: true 

    belongs_to :user 
end
