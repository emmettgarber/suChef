class Specialization < ActiveRecord::Base
	belongs_to :cook, class_name: "User"
	belongs_to :specialty
end
