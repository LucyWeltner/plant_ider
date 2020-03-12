class RenameColumn < ActiveRecord::Migration[6.0]
  def change
  	rename_column :plants, :leaf_shape_id, :leaf_type_id
  end
end
