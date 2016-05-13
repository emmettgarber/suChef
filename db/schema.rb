# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160513152048) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "classrooms", force: :cascade do |t|
    t.integer  "instructor_id"
    t.integer  "apprentice_id"
    t.datetime "starttime"
    t.string   "cuisine"
    t.string   "dish"
    t.string   "hangout_url"
    t.string   "language"
    t.datetime "endtime"
    t.string   "type"
    t.integer  "instructor_goodness"
    t.integer  "apprentice_goodness"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "details", force: :cascade do |t|
    t.integer  "classroom_id"
    t.string   "ingredients"
    t.string   "equipment"
    t.string   "prep"
    t.string   "other_instructions"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "specializations", force: :cascade do |t|
    t.integer  "cook_id"
    t.integer  "specialty_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "specialties", force: :cascade do |t|
    t.string   "special"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "image_url"
    t.string   "full_name"
    t.string   "timezone"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.string   "provider"
    t.string   "uid"
    t.string   "oauth_token"
    t.datetime "oauth_expires_at"
  end

end
