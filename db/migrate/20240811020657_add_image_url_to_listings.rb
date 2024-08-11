class AddImageUrlToListings < ActiveRecord::Migration[7.2]
  def change
    change_table :listings do |t|
      t.string :image_url
    end
  end
end
