class CreateDetails < ActiveRecord::Migration
  def change
    create_table :details do |t|
      t.integer :classroom_id
      t.string :ingredients
      t.string :equipment
      t.string :prep
      t.string :other_instructions
      t.timestamps null: false
    end
  end
end
