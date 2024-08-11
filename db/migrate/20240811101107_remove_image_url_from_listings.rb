class RemoveImageUrlFromListings < ActiveRecord::Migration[7.2]
  def change
    remove_column :listings, :image_url, :string
  end
end
