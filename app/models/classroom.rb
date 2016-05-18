class Classroom < ActiveRecord::Base
	belongs_to :instructor, class_name: "User"
	belongs_to :apprentice, class_name: "User"
	has_one :detail
	validates :cuisine, presence: true

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

	def self.all_rooms
		classrooms = []
		Classroom.all.each do |room|
			if room.instructor_id == nil && room.apprentice_id != nil
				classrooms << room
			elsif room.instructor_id != nil && room.apprentice_id == nil
				classrooms << room
			end
		end
    classrooms.sort_by(&:starttime).map do |kitchen|
      kitchen.as_json.merge(user_type: kitchen.instructor_id == nil ? "Teacher" : "Student")
    end
	end
end
