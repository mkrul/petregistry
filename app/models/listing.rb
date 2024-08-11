class Listing < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :status, presence: true, inclusion: { in: %w[active archived] }
  validates :breed_1, presence: true
  validates :species, presence: true, inclusion: { in: %w[dog cat] }
  validates :gender, presence: true, inclusion: { in: %w[male female unknown] }

  mount_uploader :image, ImageUploader
end
