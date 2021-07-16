class EditFriendRequestsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :friend_requests, :sender_id
    remove_column :friend_requests, :receiver_id
  end
end
