class UserController < ApplicationController
  def login
  end

  def profile
  	if request.xhr?
  		userdata = User.find(session[:user_id]).to_json
  	end
  end

  private
  def user_params
    params.require(:user).permit(:provider, :uid, :full_name, :oauth_token, :oauth_expires_at)
  end
end
