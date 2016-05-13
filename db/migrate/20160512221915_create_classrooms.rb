class CreateClassrooms < ActiveRecord::Migration
  def change
    create_table :classrooms do |t|
      t.integer :instructor_id
      t.integer :apprentice_id
      t.datetime :starttime
      t.string :cuisine
      t.string :dish
      t.string :hangout_url
      t.string :language
      t.datetime :endtime
      t.string :type
      t.integer :instructor_goodness
      t.integer :apprentice_goodness
      t.timestamps null: false
    end
  end
end
