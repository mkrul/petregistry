class AddImageToListings < ActiveRecord::Migration[7.2]
  def change
    add_column :listings, :image, :string
  end
end
