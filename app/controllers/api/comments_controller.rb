class CommentsController < ApplicationController
    before_action :require_logged_in 

    def index 
        @comments = Comment.all 
        if params[:postId]
            @comments = @comments.where(post_id: params[:postid])
        end
        render :index 
    end


    def create 
        @comment = Comment.new(comment_params)
        if @comment.save 
            render :show 
        else
            render json: @comment.errors.full_messages, status: 422 
        end
    end

    def update 
        @comment = Comment.find_by(id: params[:id])
        if @comment.update(comment_params)
            render :show 
        else
            render json: @comment.errors.full_messages, status: 422 
        end
    end

    def destroy 
        @comment = Comment.find_by(id: params[:id])
        if @comment.destroy
            render :show 
        else
            render json: @comment.errors.full_messages, status: 422 
        end
    end

    def comment_params 
        params.require(:comment).permit(:body, :commenter_id, :post_id)
    end
end
