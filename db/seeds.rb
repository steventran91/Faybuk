# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.destroy_all


demo = User.create!(
    first_name: "Max",
    last_name: "Tran",
    email: "max@max.com",
    password: "123456",
    birthdate: "2020/01/01",
    gender: "Male",
)

user1 = User.create!(
    first_name: "Penelope",
    last_name: "Phan",
    email: "penelope@penelope.com",
    password: "123456",
    birthdate: "2020/02/02",
    gender: "Female",
)

user2 = User.create!(first_name: "Chopper", last_name: "Tran", email: "chopper@chopper.com", password: "123456", birthdate: "2020/03/03", gender: "Male")
user3 = User.create!(first_name: "Yoyo", last_name: "Chu", email: "chu@chu.com", password: "123456", birthdate: "2020/04/04", gender: "Female")





