const slack = require('./../index.js').slack;

module.exports = () => {
    const params = {
        icon_emoji: ':robot_face:'
    }

    slack.postMessageToChannel('general', 'DJ in the house', params);
};