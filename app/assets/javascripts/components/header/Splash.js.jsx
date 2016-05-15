var signIn = "Google Sign In";
var signUp = "Create a Google Account";
var Splash = React.createClass({
  render: function() {
    return(<div className="login-screen">
            <div className="login-top">
              <h1 className="login-header">Sú Chef</h1>
              <div className="login-pictures">
                <div className="login-picture-item"><Fish/></div>
                <div className="login-picture-item"><DinnerDish/></div>
                <div className="login-picture-item"><Bacon/></div>
                <div className="login-picture-item"><Donut/></div>
                <div className="login-picture-item"><Sushi/></div>
              </div>
            </div>
            <div className="login-lower">
              <a href="/auth/google_oauth2"><GoogleSignInLogo/></a>
              <a idName="sign_up" href="https://www.google.com" target="_blank"><p>Don't Have a Google Account?</p></a>
            </div>
          </div>)
  }
});
