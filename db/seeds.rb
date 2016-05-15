5.times do 
	Classroom.create(instructor_id: 1, apprentice_id: 2, cuisine: "Italian", dish: "Pasta Carbonara", instructor_goodness: 4, apprentice_goodness: 5, starttime: "2016-05-15 15:27:52 -0500", endtime: "2016-05-15 15:27:52 -0500")
end

5.times do
	Classroom.create(instructor_id: 1, apprentice_id: 2, cuisine: "Indian", dish: "Pekora", instructor_goodness: 5, apprentice_goodness: 4, starttime: "2016-05-15 15:27:52 -0500", endtime: "2016-05-15 15:27:52 -0500")
end

5.times do 
	Classroom.create(instructor_id: 2, apprentice_id: 1, cuisine: "Mexican", dish: "Burrito", instructor_goodness: 4, apprentice_goodness: 5, starttime: "2016-05-15 15:27:52 -0500", endtime: "2016-05-15 15:27:52 -0500")
end

5.times do
	Classroom.create(instructor_id: 2, apprentice_id: 1, cuisine: "Greek", dish: "Saganaki", instructor_goodness: 5, apprentice_goodness: 4, starttime: "2016-05-15 15:27:52 -0500", endtime: "2016-05-15 15:27:52 -0500")
end

specialties = ["Italian", "Greek", "French", "Tex-Mex", "Mexican", "Chinese", "Indian", "Mexican", "BBQ", "Grilling"]

specialties.each do |spec|
	Specialty.find_or_create_by(special: spec)
end


Specialization.find_or_create_by(cook_id: 1, specialty_id: 1)
Specialization.find_or_create_by(cook_id: 1, specialty_id: 2)
Specialization.find_or_create_by(cook_id: 1, specialty_id: 7)
Specialization.find_or_create_by(cook_id: 2, specialty_id: 3)
Specialization.find_or_create_by(cook_id: 2, specialty_id: 4)
Specialization.find_or_create_by(cook_id: 2, specialty_id: 5)

