class UserController < ApplicationController
  def login
  end

  def profile
  	if request.xhr?
  		# userdata = user: User.find(session[:user_id])
      # viewings = viewings: User.find(session[:session_id]).viewings
      render json: User.find(session[:user_id]).as_json(methods: [:verifiedAwesome, :viewings])
    end
  end

  private
  def user_params
    params.require(:user).permit(:provider, :uid, :full_name, :oauth_token, :oauth_expires_at)
  end
end
