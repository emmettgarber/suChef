class Classroom < ActiveRecord::Base
	belongs_to :instructor, class_name: "User"
	belongs_to :apprentice, class_name: "User"
	has_one :detail
	validates :cuisine, presence: true


	def rating_for(user)
		if user == instructor
			instructor_goodness
		else
			apprentice_goodness
		end
	end

	def soon?
		if (this.starttime - Time.now)/60 < 20
			return true
		else
			return false
		end
	end

	def done?
		if self.endtime < Time.now
			return true
		else
			return false
		end
	end

	def emails
		holder = []
		holder << self.instructor.email
		holder << self.apprentice.email
		return holder
	end

	def next_open_rooms

	end

	def self.all_rooms(current_user)
		open_classroom_for_instructors = Classroom.where(instructor_id: nil).where.not(apprentice_id: current_user.id)
		open_classroom_for_students = Classroom.where(apprentice_id: nil).where.not(instructor_id: current_user.id)
		classrooms = (open_classroom_for_students + open_classroom_for_instructors)
    classrooms.sort_by(&:starttime).map do |kitchen|
      kitchen.as_json.merge(user_type: kitchen.instructor_id == nil ? "Teacher" : "Student")
    end
	end
end
