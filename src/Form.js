import React, { Component } from "react";

var gapi = window.gapi;

var CLIENT_ID =
  "648335234421-7rqlke8p268cbb605cidlqk43vppjbv5.apps.googleusercontent.com";
var API_KEY = "AIzaSyAWTTwWdM1NH7EJYcu_mNqO8Mwzxfwbq0o";
var DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];
var SCOPES = "https://www.googleapis.com/auth/calendar.events";

const handleClick = () => {};

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
    };
  }

  handleSummary = (event) => {
    this.setState({
      summary: event.target.value,
    });
  };

  handleLocation = (event) => {
    this.setState({
      location: event.target.value,
    });
  };

  handleDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handlestartDate = (event) => {
    this.setState({
      startDate: event.target.value,
    });
  };

  handleendDate = (event) => {
    this.setState({
      endDate: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // alert(`${this.state.startDate} ${this.state.endDate}`);
    gapi.load("client:auth2", () => {
      console.log("loaded client");

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3", () => console.log("bam!"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          var event = {
            summary: this.state.summary,
            location: this.state.location,
            description: this.state.description,
            start: {
              //   dateTime: "2020-09-30T09:00:00-07:00",
              date: this.state.startDate,
              timeZone: "America/Los_Angeles",
            },
            end: {
              //   dateTime: "2020-10-01T17:00:00-07:00",
              date: this.state.endDate,
              timeZone: "America/Los_Angeles",
            },
            recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
            attendees: [
              { email: "lpage@example.com" },
              { email: "sbrin@example.com" },
            ],
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
              ],
            },
          };

          var request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });

          request.execute((event) => {
            console.log(event);
            window.open(event.htmlLink);
          });
        });
    });

    event.preventDefault();
  };

  render() {
    return (
      <div className="my-container">
        <h1 className="display-3">Add events to your Google Calender! :)</h1>
        <p className="lead">
          The google might say it's unauthorized app since my google project is
          not verified! :c
        </p>
        <p>Created by Shujja C:</p>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Summary</label>
            <input
              className="form-control"
              type="text"
              value={this.state.summary}
              onChange={this.handleSummary}
            />
            <br />
            <label>Location</label>
            <input
              className="form-control"
              type="text"
              value={this.state.location}
              onChange={this.handleLocation}
            />
            <br />
            <label>Description</label>
            <textarea
              className="form-control"
              type="text"
              value={this.state.description}
              onChange={this.handleDescription}
            ></textarea>
            <br />
            <label>Start Date</label>
            <input
              className="form-control"
              type="date"
              value={this.state.startDate}
              onChange={this.handlestartDate}
            />{" "}
            <br />
            <label>End Date</label>
            <input
              className="form-control"
              type="date"
              value={this.state.endDate}
              onChange={this.handleendDate}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
