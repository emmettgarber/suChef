require 'google/api_client'

class GoogleCalendarEvent
  def initialize(user, session_code)
    @session_code = session_code
    @current_user = user
    @calendar = "s1k0k4e5j1amk7nqt0fkgmqoi4@group.calendar.google.com"
    @client = nil
    @service = nil
  end

  def init_api
    @client = Google::APIClient.new(application_name:"SuChef", application_version: "0.0.1")
    @client.authorization.access_token = @current_user.oauth_token
    @client.authorization.code = @session_code
    @service = @client.discovered_api('calendar', 'v3')
  end

  def create_event(details = {})
    self.init_api
    @event = {
      'summary' => details[:dish],
      'description' => details[:cuisine],
      'start' => { 'dateTime' => details[:starttime].utc.iso8601 },
      'end' => { 'dateTime' => details[:endtime].utc.iso8601 },
      'attendees' => [{ 'email' => @current_user.email }]
    }
    @set_event = @client.execute(:api_method => @service.events.insert,
                                :parameters => {'calendarId' => 's1k0k4e5j1amk7nqt0fkgmqoi4@group.calendar.google.com', 'sendNotifications' => true },
                                :body => JSON.dump(@event),
                                :headers => {'Content-Type' => 'application/json'})
    p @set_event
    return @set_event
  end
end
