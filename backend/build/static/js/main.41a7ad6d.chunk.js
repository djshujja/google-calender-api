(this["webpackJsonpgoogle-calender"]=this["webpackJsonpgoogle-calender"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(2),r=a.n(o),c=(a(12),a(3)),s=a(4),i=a(6),m=a(5),u=window.gapi,d=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],p=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSummary=function(e){n.setState({summary:e.target.value})},n.handleLocation=function(e){n.setState({location:e.target.value})},n.handleDescription=function(e){n.setState({description:e.target.value})},n.handlestartDate=function(e){n.setState({startDate:e.target.value})},n.handleendDate=function(e){n.setState({endDate:e.target.value})},n.handleSubmit=function(e){u.load("client:auth2",(function(){console.log("loaded client"),u.client.init({apiKey:"AIzaSyAWTTwWdM1NH7EJYcu_mNqO8Mwzxfwbq0o",clientId:"648335234421-7rqlke8p268cbb605cidlqk43vppjbv5.apps.googleusercontent.com",discoveryDocs:d,scope:"https://www.googleapis.com/auth/calendar.events"}),u.client.load("calendar","v3",(function(){return console.log("bam!")})),u.auth2.getAuthInstance().signIn().then((function(){var e={summary:n.state.summary,location:n.state.location,description:n.state.description,start:{date:n.state.startDate,timeZone:"America/Los_Angeles"},end:{date:n.state.endDate,timeZone:"America/Los_Angeles"},recurrence:["RRULE:FREQ=DAILY;COUNT=2"],attendees:[{email:"lpage@example.com"},{email:"sbrin@example.com"}],reminders:{useDefault:!1,overrides:[{method:"email",minutes:1440},{method:"popup",minutes:10}]}};u.client.calendar.events.insert({calendarId:"primary",resource:e}).execute((function(e){console.log(e),window.open(e.htmlLink)}))}))})),e.preventDefault()},n.state={summary:"",location:"",description:"",startDate:"",endDate:""},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"my-container"},l.a.createElement("h1",{className:"display-3"},"Add events to your Google Calender! :)"),l.a.createElement("p",{className:"lead"},"The google might say it's unauthorized app since my google project is not verified! :c"),l.a.createElement("p",null,"Created by Shujja C:"),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Summary"),l.a.createElement("input",{className:"form-control",type:"text",value:this.state.summary,onChange:this.handleSummary}),l.a.createElement("br",null),l.a.createElement("label",null,"Location"),l.a.createElement("input",{className:"form-control",type:"text",value:this.state.location,onChange:this.handleLocation}),l.a.createElement("br",null),l.a.createElement("label",null,"Description"),l.a.createElement("textarea",{className:"form-control",type:"text",value:this.state.description,onChange:this.handleDescription}),l.a.createElement("br",null),l.a.createElement("label",null,"Start Date"),l.a.createElement("input",{className:"form-control",type:"date",value:this.state.startDate,onChange:this.handlestartDate})," ",l.a.createElement("br",null),l.a.createElement("label",null,"End Date"),l.a.createElement("input",{className:"form-control",type:"date",value:this.state.endDate,onChange:this.handleendDate})),l.a.createElement("button",{type:"submit",className:"btn btn-success"},"Submit")))}}]),a}(n.Component);a(13);var h=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.41a7ad6d.chunk.js.map