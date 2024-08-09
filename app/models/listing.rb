class Listing < ApplicationRecord
  validates :title, presence: true
  validates :status, presence: true, inclusion: { in: %w[active archived] }
end
