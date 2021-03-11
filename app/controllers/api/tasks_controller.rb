class Api::TasksController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @task = Task.new(task_params)
        @lists = List.all.order("created_at DESC")
        if @task.save
            render 'api/lists/index'
        else
            render json: @task.errors.full_messages, status:422
        end
    end

    def update
        @task = Task.find(params[:id])
        if @task.update(task_params)
            @lists = List.all.order("created_at DESC")
            render 'api/lists/index'
        else
            render json: @task.errors.full_messages, status:422
        end
    end

    def destroy
        @task = Task.find(params[:id])
        @task.destroy
        @lists = List.all.order("created_at DESC")
        render 'api/lists/index'
    end

    private
    def task_params
        params.permit(:title, :description, :status, :list_id)
    end
end
