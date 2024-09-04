class HomeController < ApplicationController
  def index
    @pagy, @reports = pagy(Report.all, items: 20)
  end
end
