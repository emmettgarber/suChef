class UserController < ApplicationController
  def login
  end

  def profile
  	if request.xhr?
      render json: User.find(session[:user_id]).as_json(methods: [:verifiedAwesome, :viewings, :teachings, :apprenticeScore, :instructorScore, :totalAverage])
    end
  end

  private
  def user_params
    params.require(:user).permit(:provider, :uid, :full_name, :oauth_token, :oauth_expires_at)
  end
end
