class ClassroomController < ApplicationController
	def create
		newroom = Classroom.new(classroom_params)
		if params[:classroom][:role] == "instructor"
			newroom.instructor = current_user
			newroom.instructor_email = User.find(session[:user_id]).email
		elsif params[:classroom][:role] == "apprentice"
			newroom.apprentice = current_user
			newroom.apprentice_email = User.find(session[:user_id]).email
		end

		if newroom.save
			render json: newroom.as_json
		end
	end

	def update
		updateroom = Classroom.find(params[:classroom_id])
		p session[:user_id]
		p "THIS IS THE FUCKING THING YOU WANT"
		if updateroom.apprentice_id == nil
			updateroom.apprentice_id = session[:user_id]
			updateroom.update(apprentice_email: User.find(current_user.id).email)
			render json: updateroom.as_json
		else
			updateroom.instructor_id = session[:user_id]
			updateroom.update(instructor_email: User.find(current_user.id).email)
			render json: updateroom.as_json
		end
	end

	def register
			classId = params[:classId].to_i
			classroom = Classroom.find(classId)
			if classroom.instructor_id == nil
				classroom.update(instructor_id: current_user.id)
				classroom.update(instructor_email: User.find(current_user.id).email)
			elsif classroom.apprentice_id == nil
				classroom.update(apprentice_id: current_user.id)
				classroom.update(apprentice_email: User.find(current_user.id).email)
			else
				p "Already registered, go away"
			end
			render json: { message: "Sup dawg, I'm done adding you to the class" }.as_json
	end

	def show_open
		if request.xhr?
			open_classroom_for_instructors = Classroom.where(instructor_id: nil).where.not(apprentice_id: current_user.id)
			open_classroom_for_students = Classroom.where(apprentice_id: nil).where.not(instructor_id: current_user.id)
			render json: {students: open_classroom_for_students, teachers: open_classroom_for_instructors}.as_json
		end
	end

	private
	def classroom_params
		params.require(:classroom).permit(:starttime, :endtime, :cuisine, :dish, :classroomFormat, :language)
	end
end
