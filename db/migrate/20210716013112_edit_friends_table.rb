class EditFriendsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :friend_requests, :requester_id, :integer 
    add_column :friend_requests, :requested_id, :integer
  end
end
