class EditTable < ActiveRecord::Migration[5.2]
  def change
    change_column :friend_requests, :requested_id, :integer, null: false
    change_column :friend_requests, :requester_id, :integer, null: false
    add_index :friend_requests, [:requested_id, :requester_id], unique: true
    add_foreign_key :friend_requests, :users, column: :requested_id, primary_key: "id"
    add_foreign_key :friend_requests, :users, column: :requester_id, primary_key: "id"
    
  end
end
