class AddListings < ActiveRecord::Migration[7.1]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.string :status, null: false
      t.datetime :archived_at, null: true, default: nil
      t.timestamps
    end
  end
end
