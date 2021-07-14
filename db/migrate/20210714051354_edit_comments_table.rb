class EditCommentsTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :comments, :commenter_id
    remove_index :comments, :post_id
    add_index :comments, :commenter_id
    add_index :comments, :post_id
  end
end
