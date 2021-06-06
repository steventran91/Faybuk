class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def current_user
        # add a route to expose this work
        # frontend should call this to get user data if frontend has session token
        @current_user ||= User.find_by(session_token: session[:session_token])
        # session[:current_user] = @current_user ??
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout
        current_user.reset_session_token! if logged_in?
        session[:session_token] = nil 
        @current_user = nil 
    end

    def require_logged_in
        redirect to new_session_url unless logged_in?
    end
end
