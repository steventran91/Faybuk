class EditRequestTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :requests, :friend_requests
  end
end
