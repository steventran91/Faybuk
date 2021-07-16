class EditUsersTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :birthdate
    add_column :users, :birthday, :date
  end
end
