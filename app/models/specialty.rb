class Specialty < ActiveRecord::Base
	has_many :specializations
	has_many :users, through: :specializations
end
