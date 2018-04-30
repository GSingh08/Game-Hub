# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Game.destroy_all
Game.create!([
  {
    name: "Call of Duty",
    description: "first person shooter set in world war 2",
    image: "https://imagescdn.tweaktown.com/news/5/7/57238_36_call-duty-wii-standalone-co-op-story-mode.jpg",
    release_date: "November 3, 2017"
  },
  {
    name: "Battlefield Hardline",
    description: "first person shooter set in modern day Los Angeles",
    image: "http://cdkeyplay.com/wp-content/uploads/2015/03/Battlefield-Hardline-keygen.jpg",
    release_date: "March 17, 2015"
  },
  {
    name: "CounterStrike",
    description: "A tactical 5 v 5 first person shooter",
    image: "https://www.leadhosts.com/wp-content/uploads/2016/10/counterstrike-dedicated-server.png",
    release_date: "November 8, 2000"
  }
  ])

puts "Added #{Game.count} to the Databse"
