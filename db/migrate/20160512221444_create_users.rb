class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :image_url
      t.string :full_name
      t.string :timezone
      t.timestamps null: false
    end
  end
end
