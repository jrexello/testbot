const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'culo') {
    message.reply('Me gustan grandes');
  }
  
    if (message.content.substring(0, 10) == "!question ") {
    	Wolfram.query(message.content.substring(10, message.content.length), function(err, result) {
				if(err)
					bot.reply(message, "Sorry, I couldn't process the question at this time");
				else if (result.queryresult.pod != undefined) {
					// The final result
					var text = '';
					for(var a=0; a < result.queryresult.pod.length; a++) {
						var pod = result.queryresult.pod[a];
						if (resultOpts.indexOf(pod.$.title) > -1) {
							for(var b=0; b<pod.subpod.length; b++) {
								var subpod = pod.subpod[b];
								for(var c=0; c<subpod.plaintext.length; c++) {
									// We append to the result text just incase there are more than 1 results
									text += "\n**" + resultOpts[resultOpts.indexOf(pod.$.title)] + "**: ```";
									// Sometimes Wolframs decimal points are huge, so if the result is a decimal approximation 
									// we cut it down to less characters
									text += resultOpts[resultOpts.indexOf(pod.$.title)] == 'Decimal approximation' ? subpod.plaintext[c].substring(0, 7) + "```" : subpod.plaintext[c] + "```";
								}
							}
						}
					}
					// Send the final reply after all data is collected
					bot.reply(message, text);
				} else {
					// If Wolfram doesn't have an answer
					bot.reply(message, "I don't seem to have an answer to that question");
				}
});
});

client.login(process.env.TOKEN_BOT);
