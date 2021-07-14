class Request < ApplicationRecord
    validates :sender_id, :receiver_id, presence: true 
    validates :receiver_id, uniqueness: {scope: :sender_id, message: "request pending"}
    


    belongs_to :sender, 
    foreign_key: :sender_id,
    class_name: :User

    belongs_to :receiver, 
    foreign_key: :receiver_id, 
    class_name: :User 
end


