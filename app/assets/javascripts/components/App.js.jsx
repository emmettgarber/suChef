var App = React.createClass({
  getInitialState: function() {
    return {
      user: undefined,
      userName: undefined,
      loggedIn: false,
      screen: "loggedIn",
      openStudentClasses: [],
      openTeacherClasses: [],
      openClasses: []
    };
  },

  componentWillMount: function() {
    //update backend to have sessions/info route
    $.get('/user/profile', function(resp) {
      if (resp) {
        this.setState({loggedIn: true, user: resp, userName: resp.email, fullName: resp.full_name});
      } else {
        this.setState({loggedIn: false});
      }
    }.bind(this));
    this.loadClasses();
    // const script = document.createElement("script");

    //     script.src = "https://apis.google.com/js/platform.js";
    //     script.async = false;

    //     document.body.appendChild(script);
  },

  getScreenContent: function() {
    switch (this.state.screen) {
      case "loggedIn":

        return (
        <div>
          <Header userName={this.state.fullName} onUpdate={this.updateScreen} />
          <FilterableCuisineTable cuisines={this.state.openStudentClasses} onUpdate={this.updateScreen} calendarUpdate={this.loadClasses} openStudentClasses={this.state.openStudentClasses} openTeacherClasses={this.state.openTeacherClasses} openClasses={this.state.openClasses}/>
          <MyEventsContainer profile={this.state.user} />
          <CalendarContainer onUpdate={this.updateScreen} calendarUpdate={this.loadClasses} openStudentClasses={this.state.openStudentClasses} openTeacherClasses={this.state.openTeacherClasses} openClasses={this.state.openClasses}/>
          <CreateEvent onUpdate={this.updateScreen} profileUpdate={this.loadProfile}/>
        </div>
      );
      case "editProfile":
        return (
          <div>
            <Header userName={this.state.userName} onUpdate={this.updateScreen}/>
            <EditProfile profile={this.state.user} onUpdate={this.updateScreen} />
          </div>
      );
    }
  },

  loadClasses: function() {
    $.get('/classrooms', function(resp){
      this.setState({openStudentClasses: resp.students, openTeacherClasses: resp.teachers, openClasses: resp.allRooms});
    }.bind(this));
    this.loadProfile();
  },

  loadProfile: function() {
    $.get('/user/profile', function(resp) {
      if (resp) {
        this.setState({user: resp});
      }
    }.bind(this));
  },

  updateScreen: function(newScreen, newStates={}) {
    this.setState({
      screen: newScreen
    });
    var newStatesClone = {}
    for (newState in newStates) {
			newStatesClone[newState]= newStates[newState]
		}
		this.setState(newStatesClone)
    var screens = "editUserProfile";
  },

  render: function() {
    if (this.state.loggedIn) {
      return (
        <div id="page">
          {this.getScreenContent()}
        </div>
      );
    }
    else {
      return (<Splash/>);
    }
  }

});

var CUISINES = [
  {cuisine: 'Mexican', name: 'Burrito'},
  {cuisine: 'Lithuanian', name: 'Cepelinai'},
  {cuisine: 'Greek', name: 'Gyros'},
  {cuisine: 'Italian',    name: 'Pasta'},
  {cuisine: 'Korean',    name: 'Kalbi'},
  {cuisine: 'Vietnamese',    name: 'Spring Rolls'}
];


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
