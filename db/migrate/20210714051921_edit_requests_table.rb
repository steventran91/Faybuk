class EditRequestsTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :requests, :sender_id
    remove_index :requests, :receiver_id
    add_index :requests, [:receiver_id, :sender_id], unique:true
  end
end
