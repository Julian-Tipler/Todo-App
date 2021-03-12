class Api::CommentsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @comment = Comment.new(list_params)
        if @comment.save
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
