class Api::ListsController < ApplicationController
    def index
        @lists = List.all
        if @lists
            render 'api/lists/index'
        else
            render json:['no lists!'], status: 422
        end
    end

    def create
        @list = List.new(list_params)
        if @list.save
            render 'api/lists/show'
        else
            render json: @list.errors.full_messages, status:422
        end
    end

    #update


    #destroy


    private
    def list_params
        params.require(:list).permit(:title,:color)
    end
end
