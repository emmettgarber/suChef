class CreateSpecialties < ActiveRecord::Migration
  def change
    create_table :specialties do |t|
      t.string :special
      t.timestamps null: false
    end
  end
end
