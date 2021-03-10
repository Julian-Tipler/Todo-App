require 'test_helper'

class ItemsControllerTest < ActionController::TestCase
  setup do
    @list = lists(:one)
    @item = items(:one)
  end

  test "should get index" do
    get :index, params: { list_id: @list }
    assert_response :success
  end

  test "should get new" do
    get :new, params: { list_id: @list }
    assert_response :success
  end

  test "should create item" do
    assert_difference('Item.count') do
      post :create, params: { list_id: @list, item: @item.attributes }
    end

    assert_redirected_to list_item_path(@list, Item.last)
  end

  test "should show item" do
    get :show, params: { list_id: @list, id: @item }
    assert_response :success
  end

  test "should get edit" do
    get :edit, params: { list_id: @list, id: @item }
    assert_response :success
  end

  test "should update item" do
    put :update, params: { list_id: @list, id: @item, item: @item.attributes }
    assert_redirected_to list_item_path(@list, Item.last)
  end

  test "should destroy item" do
    assert_difference('Item.count', -1) do
      delete :destroy, params: { list_id: @list, id: @item }
    end

    assert_redirected_to list_items_path(@list)
  end
end
