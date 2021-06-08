class FriendshipsController < ApplicationController

    def create 
        @friendship = Friendship.new(user_id: current_user.id, friend_id: params[:sender_id])
        @reverse_friendship = Friendship.new(user_id: params[:sender_id], friend_id: current_user.id)
        @request = Friendship.find_by(id: params[:id])

        if @friendship.save && @reverse_friendship.save && @request.destroy
            render :show 
        else
            render json: @friendship.errors.full_messages, status: 422 
        end
    end


    def destroy 
        @friendship = Friendship.find_by(id: params[:id])
        @reverse_friendship = Friendship.find_by(user_id: @friendship.friend_id, friend_id: current_user.id)
        if @friendship.destroy && @reverse_friendship.destroy 
            render :show 
        else
            render json: @friendship.errors.full_messages, status: 422 
        end
    end

    def index 
        @friends = Friendship.all 
        if params[:wallId]
            @friends = @friends.where(user_id: params[:wallId])
        end
        render :index 
    end
end
