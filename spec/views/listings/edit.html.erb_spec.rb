require 'rails_helper'

RSpec.describe "listings/edit", type: :view do
  let(:listing) {
    Listing.create!()
  }

  before(:each) do
    assign(:listing, listing)
  end

  it "renders the edit listing form" do
    render

    assert_select "form[action=?][method=?]", listing_path(listing), "post" do
    end
  end
end
