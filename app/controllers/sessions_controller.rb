class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    redirect_to root_path
    # log_in(@user)
    # render json: {result: "success", user_id: @user.id}
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

  #helper methods to manage sessions with react
  def info
    session_id = logged_in? ? session[:user_id] : false
    render json: {session_id: session_id}
  end

  def log_in(user)
    session[:user_id] = user.id
  end
end
