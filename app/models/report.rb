class Report < ApplicationRecord
  searchkick
  Report.reindex

  validates :title, presence: true
  validates :description, presence: true
  validates :status, presence: true, inclusion: { in: %w[active archived] }
  validates :breed_1, presence: true
  validates :species, presence: true, inclusion: { in: %w[dog cat] }
  validates :gender, presence: true, inclusion: { in: %w[male female unknown] }
  normalizes :title,
             :description,
             :status,
             :archived_at,
             :name,
             :species,
             :breed_1,
             :breed_2,
             :color_1,
             :color_2,
             :color_3,
             :gender,
             with: -> { _1.presence }

  has_many_attached :images, dependent: :destroy
end
