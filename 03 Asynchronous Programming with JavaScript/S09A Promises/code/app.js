const { WebClient } = require("@slack/web-api");
const { createEventAdapter } = require("@slack/events-api");
const axios = require("axios");
require("dotenv").config();

const slackSigningSecret = process.env.SIGNING_SECRET;
const slackToken = process.env.SLACK_TOKEN;
const port = process.env.PORT || 3000;

const slackClient = new WebClient(slackToken);
const slackEvents = createEventAdapter(slackSigningSecret);

const getTeam = (id) => {
  const teams = [];

  const team1 = axios
    .get(`/team/5`)
    .then((res) => teams.push(...res.data.data));
  const team2 = axios
    .get(`/team/6`)
    .then((res) => teams.push(...res.data.data));
  const team3 = axios
    .get(`/team/7`)
    .then((res) => teams.push(...res.data.data));

  return Promise.all([team1, team2, team3]).then(() => teams);

  //   return axios
  //     .get(`/team/${id}`)
  //     .then((res) => teams.push(...res.data.data))
  //     .then(() => teams)
  //     .catch((err) => console.log("Error: ", err));
};

slackEvents.on("app_mention", (event) => {
  console.log(`Got message from user ${event.user}: ${event.text}`);

  if (event.text.includes("team")) {
    const team_id = event.text.split(" ")[2];

    getTeam(team_id).then((teams) => {
      console.log("Teams: ", teams);
      slackClient.chat
        .postMessage({
          channel: event.channel,
          text: `Hi <@${event.user}>, the teams you asked for are ${teams
            .map(
              (team) =>
                `${team.name_en} its flag is <${team.flag}|flag> and is in group ${team.groups}`
            )
            .join(" and ")}`,
        })
        .then(() => console.log("Posted Welcome message."))
        .catch((err) => console.log("Error: ", err));
    });
  } else {
    slackClient.chat
      .postMessage({
        channel: event.channel,
        text: `Hi <@${event.user}>, welcome to the channel`,
      })
      .then(() => console.log("Posted Welcome message."))
      .catch((err) => console.log("Error: ", err));
  }
});

slackEvents
  .start(port)
  .then(() => {
    console.log(`Server started at port ${port}`);

    axios
      .post("http://api.cup2022.ir/api/v1/user/login", {
        email: process.env.EMAIL,
        password: process.env.PASSWORD,
      })
      .then((res) => {
        axios.defaults.baseURL = "http://api.cup2022.ir/api/v1";
        axios.defaults.headers.common["Authorization"] = res.data.data.token;
        axios.defaults.headers.post["Content-Type"] = "application/json";
      })
      .catch((err) => console.log("Error: ", err));
  })
  .catch((err) => console.log("Error: ", err));
