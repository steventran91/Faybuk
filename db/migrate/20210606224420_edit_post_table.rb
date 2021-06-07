class EditPostTable < ActiveRecord::Migration[5.2]
  def change
    add_index :posts, :wall_id 
    add_index :posts, :author_id
  end
end
