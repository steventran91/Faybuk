class RequestsController < ApplicationController

    def create 
        @request = Request.new(request_params)
        @request.sender_id = current_user.id 
        if @request.save
            render :show 
        else
            render json: @request.errors.full_messages, status: 422 
        end
    end

    def destroy 
        @request = Request.find_by(id: params[:id])

        if @request.destroy.
            render :show 
        else
            render json: @request.errors.full_messages, status: 422 
        end
    end

    def request_params
        params.require(:request).permit(:sender_id, :receiver_id)
    end
end
