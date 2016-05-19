var HangoutButton = React.createClass({
	getButton: function(viewing){
		var emails = "";
		if (this.props.profile.id  == viewing.instructor_id ) {
			emails = "[{ id : '"+(viewing.apprentice_email)+"', invite_type : 'EMAIL' }]"
      } else { emails = "[{ id : '"+(viewing.instructor_email)+"', invite_type : 'EMAIL' }]"
     };

	  var eventTime = viewing.starttime;
	  var time = moment(eventTime).diff(moment(), 'minutes')
	  if (time <= 30) {
			return (<div><script src="https://apis.google.com/js/platform.js" async></script><div className="g-hangout" data-render="createhangout" data-invites={emails}></div></div>)
		} else {
			return ( <div> Check back later</div>)
		}
	},

	render: function() {
		return (
			<div>{this.getButton(this.props.room)}</div>
		)
	}
})

