class ClassroomController < ApplicationController
	def create
		p request.body
		# newroom = Classroom.new(classroom_params)
		# if newroom.save
		# 	render json: newroom.as_json
		# end
	end

	def update
		updateroom = Classroom.find(params[:classroom_id])
		if updateroom.apprentice_id == nil
			updateroom.apprentice_id = session[:user_id]
			render json: updateroom.as_json
		else
			updateroom.instructor_id = session[:user_id]
			render json: updateroom.as_json
		end
	end

	# def show_open

	# end
	private
	def classroom_params
		params.require(:classroom).permit(:starttime, :endtime, :cuisine, :dish, :type, :language)
	end
end
