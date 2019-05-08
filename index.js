const slackBot = require('slackbots');

const slack = new slackBot({
    token: 'xoxb-618552895299-618565497203-9U53YcMbcuZRLU5I8HZRQ4ui',
    name: 'MusicBot'
});

exports.slack = slack;

// event handlers
let reqEvent = (event) => require(`./events/${event}`);

slack.on('start', reqEvent('start'));
slack.on('message', reqEvent('message'));
slack.on('error', reqEvent('error'));

