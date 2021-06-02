require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get api::controller" do
    get users_api::controller_url
    assert_response :success
  end

end
