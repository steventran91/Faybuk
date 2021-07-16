class EditUsersT < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :gender 
    add_column :users, :gender, :string 
  end
end
