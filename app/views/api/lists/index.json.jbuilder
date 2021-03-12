json.lists @lists do |list|
    json.extract! list, :id, :title, :color
    json.tasks list.tasks do |task|
        json.extract! task, :id, :title, :description, :status, :list_id
        json.comments task.comments
    end
end
