class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :like_id, null: false 
      t.string :like_type, null: false 
      t.timestamps
    end
    add_index :likes, [:like_id, :like_type, :user_id], unique:true 
  end
end
