require 'active_interaction'

class Reports::Search < ActiveInteraction::Base
  string :query

  def execute
    res = query_array

    return res if res.present?
  end

  private

  def query_to_array
    query.squish.split(' ')
  end

  def query_array
    Report.where(

    ).order(updated_at: :desc)
  end

  def search_sql(q)
    query_to_array.map do |q|

    end

  end
end
