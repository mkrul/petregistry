class AddDescriptionSpeciesBreedColorToListings < ActiveRecord::Migration[7.1]
  def change
    add_column :listings, :description, :text, null: false
    add_column :listings, :species, :string, null: false
    add_column :listings, :breed_1, :string, null: false
    add_column :listings, :breed_2, :string, default: nil
    add_column :listings, :color_1, :string, null: false
    add_column :listings, :color_2, :string, default: nil
    add_column :listings, :color_3, :string, default: nil
  end
end
