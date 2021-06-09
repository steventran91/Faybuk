# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri" 

User.destroy_all


demo = User.create!(
    first_name: "Max",
    last_name: "Tran",
    email: "max@max.com",
    password: "123456",
    birthdate: "2020/01/01",
    gender: "Male",
)

democover = open("https://faybuk-seeds.s3-us-west-1.amazonaws.com/max_cover.jpeg")
demo.cover_photo.attach(io: democover, filename: 'demo_cover_photo.jpg')

demoprofile = open("https://faybuk-seeds.s3-us-west-1.amazonaws.com/max_profile.jpeg")
demo.profile_pic.attach(io: demoprofile, filename: 'demo_profile_pic.jpg')


user1 = User.create!(
    first_name: "Penelope",
    last_name: "Phan",
    email: "penelope@penelope.com",
    password: "123456",
    birthdate: "2020/02/02",
    gender: "Female",
)

user1cover = open("https://faybuk-seeds.s3-us-west-1.amazonaws.com/pen_cover.JPEG")
user1.cover_photo.attach(io: user1cover, filename: 'user1_cover_photo.jpg')

user1profile = open("https://faybuk-seeds.s3-us-west-1.amazonaws.com/pen_profile.JPG")
user1.profile_pic.attach(io: user1profile, filename: 'user1_profile_pic.jpg')

user2 = User.create!(first_name: "Chopper", last_name: "Tran", email: "chopper@chopper.com", password: "123456", birthdate: "2020/03/03", gender: "Male")
user3 = User.create!(first_name: "Yoyo", last_name: "Chu", email: "chu@chu.com", password: "123456", birthdate: "2020/04/04", gender: "Female")


friendship1 = Friendship.create!(
    user_id: demo.id,
    friend_id: user3.id 
)

reverse_friendship1 = Friendship.create!(
    user_id: user3.id,
    friend_id: demo.id 
)

friendship2 = Friendship.create!(
    user_id: demo.id,
    friend_id: user2.id 
)

reverse_friendship2 = Friendship.create!(
    user_id: user2.id,
    friend_id: demo.id 
)

friendship3 = Friendship.create!(
    user_id: user1.id,
    friend_id: user3.id 
)

reverse_friendship3 = Friendship.create!(
    user_id: user3.id,
    friend_id: user1.id 
)

friendship4 = Friendship.create!(
    user_id: user1.id,
    friend_id: user2.id 
)

reverse_friendship4 = Friendship.create!(
    user_id: user2.id,
    friend_id: user1.id 
)

request1 = Request.create!(
    sender_id: user1.id,
    receiver_id: demo.id 
)

post1 = Post.create!(
    body: "my owner will not give me attention",
    wall_id: demo.id,
    author_id: demo.id 
)

post2 = Post.create!(
    body: "YOYOYO",
    wall_id: demo.id ,
    author_id: user3.id 
)

post3 = Post.create!(
    body: "how's california?",
    wall_id: demo.id ,
    author_id: user2.id 
)

post4 = Post.create!(
    body: "wsupppppp gurlllll",
    wall_id: user3.id ,
    author_id: user1.id 
)

comment1 = Comment.create!(
    body: "you just sleep all day",
    post_id: post1.id,
    commenter_id: user2.id 
)

comment2 = Comment.create!(
    body: "woof woof",
    post_id: post4.id,
    commenter_id: user3.id 
)












