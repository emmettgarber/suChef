class ClassroomController < ApplicationController
	# def new
	# 	newroom = Classroom.new(params[:classroom])
	# 	if newroom.save
	# 		render json: newroom.as_json
	# 	end
	# end

	# def add
	# 	updateroom = Classroom.find(params[:classroom_id])
	# 	if updateroom.apprentice_id == nil
	# 		updateroom.apprentice_id = session[:user_id]
	# 		render json: updateroom.as_json
	# 	else
	# 		updateroom.instructor_id = session[:user_id]
	# 		render json: updateroom.as_json
	# 	end
	# end

	def register
	    p "Ya got me bro. "
			p params[:classId]
			classroom = Classroom.find(id: params[:classId])
			current_user.classrooms << classroom

			render json: "Sup dawg"
	end

	def show_open
		if request.xhr?
			open_classroom_for_instructors = Classroom.where(apprentice_id: true, instructor_id: nil)
			open_classroom_for_students = Classroom.where(apprentice_id: nil, instructor_id: true)
			render json: {students: open_classroom_for_students, teachers: open_classroom_for_instructors}.as_json
		end
	end
end
