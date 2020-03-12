class CreateFruitColors < ActiveRecord::Migration[6.0]
  def change
    create_table :fruit_colors do |t|
      t.integer :plant_id
      t.integer :color_id

      t.timestamps
    end
  end
end
