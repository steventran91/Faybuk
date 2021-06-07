class User < ApplicationRecord
    validates :first_name, :last_name, :password_digest, presence: true
    validates :email, :session_token, presence: true, uniqueness: true 
    validates :password, length: { minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token
    attr_reader :password

    has_one_attached :profile_pic
    has_one_attached :cover_photo

    has_many :posts,
    foreign_key: :author_id,
    class_name: :Post

    has_many :received_posts,
    foreign_key: :wall_id,
    class_name: :Post

    has_many :comments, 
    foreign_key: :commenter_id,
    class_name: :Comment

    has_many :friendships,
    foreign_key: :user_id,
    class_name: :Friendship 

    has_many :friends,
    through: :friendships,
    source: :friend 

    has_many :sent_requests,
    foreign_key: :sender_id,
    class_name: :Request 

    has_many :received_requests,
    foreign_key: :receiver_id,
    class_name: :Request


    


    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        else
            return nil 
        end
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end
