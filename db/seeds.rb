# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(
    first_name: "user",
    last_name: "demo",
    email: "user@user.com",
    password: "123456",
    birthdate: "2020/01/01",
    gender: "Male",
)


