class UserController < ApplicationController
  def login
  end


  private
  def user_params
    params.require(:user).permit(:provider, :uid, :full_name, :oauth_token, :oauth_expires_at)
  end
end
