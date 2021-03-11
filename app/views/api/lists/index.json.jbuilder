json.lists @lists do |list|
    json.list list
    json.tasks list.tasks do |task|
        json.task task
        json.comments task.comments
    end
end
