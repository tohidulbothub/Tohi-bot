const fs = require("fs");
const request = require("request");
module.exports = {
	config: {
		name: "npx2",
		version: "1.0.1",
		usePrefix: false,
		permssion: 0,
		credits: "TOHI-BOT-HUB",
		description: "Fun",
		commandCategory: "fun",
		usages: "😒",
		cooldowns: 5,
	},

	handleEvent: async function({ api, event, client, __GLOBAL }) {
		var { threadID, messageID } = event;
		const content = event.body ? event.body : '';
		const body = content.toLowerCase();

		
		const media = await new Promise((resolve, reject) => {
			request.get(
				'https://i.imgur.com/Yc2atQe.mp4',
				{ encoding: null },
				(error, response, body) => {
					if (error) {
						reject(error);
					} else {
						resolve(body);
					}
				}
			);
		});

		if (
			body.indexOf("Love") == 0 ||
			body.indexOf("❤️‍🔥") == 0 ||
			body.indexOf("💌") == 0 ||
			body.indexOf("💘") == 0 ||
			body.indexOf("💟") == 0 ||
			body.indexOf("I love u") == 0 ||
			body.indexOf("I love you") == 0 ||
			body.indexOf("valobashi") == 0 ||
			body.indexOf("Valobashi") == 0 ||
			body.indexOf("🖤") == 0
		) {
			var msg = {
				body: "ভালোবাসা সুন্দর🖤",
				attachment: media,
			};
			api.sendMessage(msg, threadID, messageID);
			api.setMessageReaction("🖤", event.messageID, (err) => {}, true);
		}
	},
	start: function({ nayan }) {},
};