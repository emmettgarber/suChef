var signIn = "Google Sign In";
var signUp = "Create a Google Account";

var Splash = React.createClass({
  render: function() {
    return(<div className="login-screen">
            <div className="login-top">
              <h1 className="login-header">Sú Chef</h1>
              <div className="login-pictures">
                <Sushi />
                <div className="login-picture-item"></div>
                <div className="login-picture-item"></div>
                <div className="login-picture-item"></div>
                <div className="login-picture-item"></div>
                <div className="login-picture-item"></div>
              </div>
            </div>
            <div className=""
            <a idName="sign_in" href="/auth/google_oauth2">{signIn}</a>
            <p className="small-text">Don't have a Google Account?</p>
            <a idName="sign_up" href="https://www.google.com" target="_blank">{signUp}</a>
          </div>)
  }
});
