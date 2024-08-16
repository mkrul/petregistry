class ChangeListingsToReports < ActiveRecord::Migration[7.2]
  def change
    rename_table :listings, :reports
  end
end
