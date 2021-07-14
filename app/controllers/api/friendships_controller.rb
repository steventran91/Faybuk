class FriendshipsController < ApplicationController

    def create 
        @friendship = Friendship.new(friendship_params)
        friend_request = Request.find_by(receiver_id: params[:friendship][:user_id], sender_id: params[:friendship][:friend_id])
        connected_friendship = Friendship.new(user_id: params[:friendship][friend_id]. friend_id: params[:friendship][:user_id])

        if @friendship.save 
            connected_friendship.save 
            friend_request.destroy 
            render :show 
        else
            render json: @friendship.errors.full_messages, status: 422 
        end
    end


    def destroy 
        @friendship = Friendship.find_by(id: params[:id])
        connected_friendship = @friendship.connected_friendship
        if @friendship
            @friendship.destroy 
            connected_friendship.destroy 
            render :show 
        else
            render json: @friendship.errors.full_messages, status: 422 
        end
    end

    # def index 
    #     @friends = Friendship.all 
    #     if params[:wallId]
    #         @friends = @friends.where(user_id: params[:wallId])
    #     end
    #     render :index 
    # end

    private 
    def friendship_params
        params.require(:friendship).permit(:user_id, :friend_id)
    end
end
