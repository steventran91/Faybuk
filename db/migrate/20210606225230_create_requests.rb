class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.integer :sender_id, null: false 
      t.integer :receiver_id, null: false 
      t.timestamps
    end
    add_index :requests, :sender_id, unique: true 
    add_index :requests, :receiver_id, unique: true 
  end
end
