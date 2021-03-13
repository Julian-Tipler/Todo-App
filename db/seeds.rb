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
        title:'list 1',
        color:'yellow'
    },
    {
        title:'list 2',
        color:'blue'
    }
])

tasks = Task.create([
    {
        title:'Walk the dog',
        description:'Take the dog to the park and to the beach',
        status:false,
        list_id:1
    },
    {
        title:'Run the other dog',
        description:'He is faster',
        status:false,
        list_id:1
    },
    {
        title:'Walk the cat',
        description:'Take the cat to the house',
        status:false,
        list_id:2
    }
])

comments = Comment.create([
    {
        body:"Make sure to take the leash and bags",
        task_id:1
    }
])
