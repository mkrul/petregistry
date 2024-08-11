class AddNameAndGenderToListings < ActiveRecord::Migration[7.2]
  def change
    change_table :listings do |t|
      t.string :name, null: false
      t.string :gender, null: false
    end
  end
end
