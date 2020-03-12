class CreateLeafType < ActiveRecord::Migration[6.0]
  def change
    create_table :leaf_types do |t|
      t.string :name
      t.text :description
      t.string :image_link
    end
  end
end
