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

end
