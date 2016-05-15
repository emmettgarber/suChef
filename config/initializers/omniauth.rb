OmniAuth.config.logger = Rails.logger

url = "#{ENV["GOOGLE_CLIENT_ID"]}.apps.googleusercontent.com"
secret = ENV["GOOGLE_CLIENT_SECRET"]
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, url, secret, {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
