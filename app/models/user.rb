class User < ActiveRecord::Base
  #  def self.from_omniauth(auth)
  #   @user = User.first_or_initialize_by(user_params)
  #   @user.provider = auth.provider
  #   @user.uid = auth.uid
  #   @user.full_name = auth.info.name
  #   @user.oauth_token = auth.credentials.token
  #   @user.oauth_expires_at = Time.at(auth.credentials.expires_at)
  #   @user.save!
  # end








  def self.from_omniauth(auth)
    p auth.info

    where(provider: auth.provider, uid: auth.uid).first_or_create.tap do |user|
      user.provider = auth.provider
      user.uid      = auth.uid
      user.email    =  auth.info.email
      # user.first_name = auth.info.first_name
      user.full_name = auth.info.name
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save
    end
  end
end
