class Api::UsersController < ApplicationController
    before_action :require_logged_in, only: [:show]

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show 
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show 
        @user = User.find_by(id: params[:id])
        if @user
            render :show
        else
          render json: ["User does not exist"], status: 422
        end  
    end

    def update 
        @user = User.find_by(id: params[:id])
        if @user.update(user_params)
            render :show 
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index 
        @users = User.all 
        render :index 
    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :birthdate, :gender, :city, :password, :profile_pic, :cover_photo) 
    end
end