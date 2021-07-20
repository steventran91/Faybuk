class RenameLikes < ActiveRecord::Migration[5.2]
  def change
    rename_column :likes, :like_id, :likeable_id
    rename_column :likes, :like_type, :likeable_type
  end
end
