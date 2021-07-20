class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :bio, :string
    add_column :users, :location, :string
    add_column :users, :work, :string
    add_column :users, :school, :string 
  end
end
