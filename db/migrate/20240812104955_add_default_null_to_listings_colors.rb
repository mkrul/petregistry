class AddDefaultNullToListingsColors < ActiveRecord::Migration[7.2]
  def change
    change_column :listings, :color_2, :string, default: nil
    change_column :listings, :color_3, :string, default: nil
    change_column :listings, :breed_2, :string, default: nil
    change_column :listings, :image, :string, default: nil
    change_column :listings, :archived_at, :datetime, default: nil
  end
end
