json.extract! user, :id, :name, :age, :created_at, :updated_at
json.user_url user_url(user)
json.edit_url edit_user_url(user)
