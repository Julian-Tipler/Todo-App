# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
List.delete_all


lists = List.create([
    {
        title:'list1',
        color:'yellow'
    },
    {
        title:'list 2',
        color:'blue'
    }
])

tasks = Task.create([
    {
        title:'walk the doge',
        description:'take the doge to the park and to the beach',
        status:false,
        list_id:1
    },
    {
        title:'walk the cate',
        description:'take the cate to the house and to the house again',
        status:false,
        list_id:2
    }
])