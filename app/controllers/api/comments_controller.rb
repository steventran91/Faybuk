class Api::CommentsController < ApplicationController
    def create 
        @comment = Comment.new(comment_params)
        if @comment.save 
            render :show 
        else
            render json: @comment.errors.full_messages, status: 400 
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment 
            @comment.destroy 
            render :show 
        else
            render json: ["Cannot find comment with ID"], status: 404 
        end
    end

    def update 
        @comment = Comment.find_by(id: params[:id])
        if @comment.update(comment_params)
            render :show 
        else
            render json: @post.errors.full_messages, status: 422 
        end
    end

    private 
    def comment_params
        params.require(:comment).permit(:commenter_id, :post_id, :body)
    end
end