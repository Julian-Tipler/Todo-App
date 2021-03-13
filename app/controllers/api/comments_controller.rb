class Api::CommentsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            @task=Task.find(comment_params[:task_id])
            render 'api/tasks/show'
        else
            render json: @list.errors.full_messages, status:422
        end
    end

    def destroy

    end

    private
    def comment_params
        params.permit(:body,:task_id)
    end
end
