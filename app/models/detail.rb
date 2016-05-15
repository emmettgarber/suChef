class Detail < ActiveRecord::Base
	belongs_to :class
	validates :classroom_id, presence: true
end
