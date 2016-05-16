class ChangeTypeColumnInClassroomToClassroomFormat < ActiveRecord::Migration
  def change
    rename_column :classrooms, :type, :classroomFormat
  end
end
