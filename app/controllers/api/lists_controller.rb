class Api::ListsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @lists = List.all.order("created_at DESC")
        if @lists
            render 'api/lists/index'
        else
            render json:['no lists!'], status: 422
        end
    end

    def create
        @list = List.new(list_params)
        @lists = List.all.order("created_at DESC")
        if @list.save
            render 'api/lists/index'
        else
            render json: @list.errors.full_messages, status:422
        end
    end

    def update
        puts(params)
        @list = List.find(params[:id])
        puts(@list)
        if @list.update(list_params)
            @lists = List.all.order("created_at DESC")
            render 'api/lists/index'
        else
            render json: @list.errors.full_messages, status:422
        end
    end

    def destroy
        @list = List.find(params[:id])
        @list.destroy
        @lists = List.all.order("created_at DESC")
        render 'api/lists/index'
    end


    private
    def list_params
        params.permit(:title,:color)
    end
end
