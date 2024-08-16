class DeleteImageFromListings < ActiveRecord::Migration[7.2]
  def change
    remove_column :listings, :image, :string
  end
end
