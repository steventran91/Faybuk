class Like < ApplicationRecord
    validates :likeable_id, :likeable_type, :user_id, presence: true 
    validates :user_id, uniqueness: {scope: [:likeable_id, :likeable_type]}

    belongs_to :likeable,
    polymorphic: true 

    belongs_to :user 
end
