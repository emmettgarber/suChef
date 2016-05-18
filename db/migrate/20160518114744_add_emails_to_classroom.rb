class AddEmailsToClassroom < ActiveRecord::Migration
  def change
  	add_column :classrooms, :instructor_email, :string
  	add_column :classrooms, :apprentice_email, :string
  end
end
