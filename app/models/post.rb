class Post < ApplicationRecord
    validates :author_id, :wall_id, :body, presence: true 

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User


    belongs_to :wall,
    foreign_key: :wall_id,
    class_name: :User 

    has_many :comments, dependent: :destroy

    has_many :likes, 
    as: :likeable,
    dependent: :destroy 

    has_one_attached :photo 

end
