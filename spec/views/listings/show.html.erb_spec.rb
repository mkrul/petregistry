require 'rails_helper'

RSpec.describe "listings/show", type: :view do
  before(:each) do
    assign(:listing, Listing.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
