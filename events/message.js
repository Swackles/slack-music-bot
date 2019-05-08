const slack = require('./../index.js').slack;

module.exports = (data) => {
    if (data.type !== 'message') return;
    console.log(data.bot_id);
    if (data.bot_id != undefined) return;

    console.log(data);
    let args = data.text.split(' ');
    
    for (let i = 0; i < args.length; i++) {
        if (/^<@(.*?)>$/.test(args[i])) args.splice(i, 1);
    }
    try {
        require(`./events/${args[i]}`);
    } catch (e) {
        slack.postMessageToChannel(data.channel, ":no_entry: Not a command");
    }
    console.log(data);
}