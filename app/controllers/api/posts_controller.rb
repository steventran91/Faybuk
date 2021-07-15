class Api::PostsController < ApplicationController

    def index 
        if wall_id != 0
            @posts = Post.where(`wall_id = #{wall_id}`).order("created_at DESC")
        elsif user_id != 0
            current_user = User.find(user_id)
            friend_id_arr = current_user.friends.map do |friend|
                friend.id
            end
            friend_id_arr << user_id 
            @posts = Post.where(author_id: :friend_id_arr)
        else
            @posts = Post.all 
        end
        render :index 
    end

    def show 
        @post = Post.find_by(id: params[:id])
        render :show 
    end

    def create 
        @post = Post.new(post_params)
        if @post.save
            render :show 
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update 
        @post = Post.find_by(id: params[:id])
        if @post.update(post_params)
            render :show 
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy 
        @post = Post.find_by(id: params[:id])
        if @post
            @post.destroy
            render :show 
        else
            render json: ['Post does not exist'], status: 422 
        end
    end

    def wall_id
        params[:wallId].to_i
    end

    def user_id 
        params[:userId].to_i
    end

    private 

    def post_params 
        params.require(:post).permit(:body, :author_id, :wall_id, :photo)
    end
end
