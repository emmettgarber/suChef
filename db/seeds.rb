# 5.times do
# 	Classroom.create(instructor_id: 1, apprentice_id: 2, cuisine: "Italian", dish: "Pasta Carbonara", instructor_goodness: 4, apprentice_goodness: 5, starttime: "2016-05-15 15:27:52 -0500", endtime: "2016-05-15 15:27:52 -0500")
# end
#
# 5.times do
# 	Classroom.create(instructor_id: 1, apprentice_id: 2, cuisine: "Indian", dish: "Pekora", instructor_goodness: 5, apprentice_goodness: 4, starttime: "2016-05-15 15:27:52 -0500", endtime: "2016-05-15 15:27:52 -0500")
# end
#
# 5.times do
# 	Classroom.create(instructor_id: 2, apprentice_id: 1, cuisine: "Mexican", dish: "Burrito", instructor_goodness: 4, apprentice_goodness: 5, starttime: "2016-05-15 15:27:52 -0500", endtime: "2016-05-15 15:27:52 -0500")
# end
#
# 5.times do
# 	Classroom.create(instructor_id: 2, apprentice_id: 1, cuisine: "Greek", dish: "Saganaki", instructor_goodness: 5, apprentice_goodness: 4, starttime: "2016-05-15 15:27:52 -0500", endtime: "2016-05-15 15:27:52 -0500")
# end
#
# specialties = ["Italian", "Greek", "French", "Tex-Mex", "Mexican", "Chinese", "Indian", "Mexican", "BBQ", "Grilling"]
#
# specialties.each do |spec|
# 	Specialty.find_or_create_by(special: spec)
# end


# Specialization.find_or_create_by(cook_id: 1, specialty_id: 1)
# Specialization.find_or_create_by(cook_id: 1, specialty_id: 2)
# Specialization.find_or_create_by(cook_id: 1, specialty_id: 7)
# Specialization.find_or_create_by(cook_id: 2, specialty_id: 3)
# Specialization.find_or_create_by(cook_id: 2, specialty_id: 4)
# Specialization.find_or_create_by(cook_id: 2, specialty_id: 5)


# ====================== Re Run Seed with data below ==============
# "2016-05-27 07:51:49 -0500"

Classroom.create(apprentice_id: 1, cuisine: "Italian", dish: "Pasta Carbonara", starttime: "2016-05-20 13:27:52 -0500", endtime: "2016-05-20 13:27:53 -0500",)
Classroom.create(instructor_id: 1, cuisine: "Italian", dish: "Pasta Carbonara", starttime: "2016-05-20 14:27:52 -0500", endtime: "2016-05-20 14:27:53 -0500",)
Classroom.create(apprentice_id: 1, cuisine: "Italian", dish: "Pasta Carbonara", starttime: "2016-05-20 15:27:52 -0500", endtime: "2016-05-20 15:27:53 -0500",)
Classroom.create(instructor_id: 1, cuisine: "Italian", dish: "Pasta Carbonara", starttime: "2016-05-20 16:27:52 -0500", endtime: "2016-05-20 16:27:53 -0500",)
Classroom.create(apprentice_id: 1, cuisine: "Italian", dish: "Pasta Carbonara", starttime: "2016-05-20 17:27:52 -0500", endtime: "2016-05-20 17:27:53 -0500",)
Classroom.create(apprentice_id: 2, cuisine: "Italian", dish: "Pasta Carbonara", starttime: "2016-05-20 18:27:52 -0500", endtime: "2016-05-20 18:27:53 -0500",)
Classroom.create(instructor_id: 2, cuisine: "Italian", dish: "Pasta Carbonara", starttime: "2016-05-20 19:27:52 -0500", endtime: "2016-05-20 19:27:53 -0500",)
Classroom.create(apprentice_id: 2, cuisine: "Italian", dish: "Pasta Carbonara", starttime: "2016-05-20 20:27:52 -0500", endtime: "2016-05-20 20:27:53 -0500",)
Classroom.create(instructor_id: 2, cuisine: "Italian", dish: "Pasta Carbonara", starttime: "2016-05-20 21:27:52 -0500", endtime: "2016-05-20 21:27:53 -0500",)
Classroom.create(apprentice_id: 2, cuisine: "Italian", dish: "Pasta Carbonara", starttime: "2016-05-20 22:27:52 -0500", endtime: "2016-05-20 22:27:53 -0500",)
