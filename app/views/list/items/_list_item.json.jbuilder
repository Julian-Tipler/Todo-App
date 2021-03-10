json.extract! list_item, :id, :title, :description, :status, :created_at, :updated_at
json.url list_item_url(list_item, format: :json)
