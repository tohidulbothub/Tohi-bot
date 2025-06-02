module.exports.config = {
  commandCategory: "admin",
  name: "goiadmin",
  version: "1.0.0",
  permission: 0,
  credits: "TOHI-BOT-HUB",
  description: "mention",
  usePrefix: true,
  category: "user",
  usages: "tag",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body && event.body.toLowerCase() == "goiadmin") {
    // তহিদুল-এর ফেসবুক আইডি
    const adminId = "100092006324917";
    if (event.senderID !== adminId) {
      var aid = [adminId];
      for (const id of aid) {
        if (Object.keys(event.mentions).includes(id)) {
          var msg = [
            "মেনশন দিও না, তহিদুল বস এখন মোটেও ভালো নেই আজকে-!💔🥀",
            "- আমার সাথে কেউ কথা বলে না, একদম একা লাগে আজকাল 🫂💔",
            "একটা আপন মানুষ খুব দরকার, কারণ চোখে পানি আসার আগেই নাকে সর্দি চলে আসে 🤣🤣",
            "এত মেনশন না দিয়ে গ্রুপে এসো, হট কিছু পাবা 🤷‍♂️😘🥒",
            "মেনশন দিলে চুমু দিয়ে ঠোঁটের কালার চেঞ্জ করে দিবো 💋😾🔨",
            "এত ইমোশনাল কথা বলো যে মনে হচ্ছে মন দিয়ে অঝোরে বৃষ্টি হচ্ছে 😭😭",
            "তহিদুল বস এখন বিজি, যা বলার আমাকে বলো! 😼🥰",
            "এত মেনশন না দিয়ে সিঙ্গেল তহিদুলকে একটা গফ দে 😒 😏",
            "মেনশন না দিয়ে প্রেম করতে চাইলে ইনবক্সে চলে আসো!",
            "মেনশন দিস না, পারলে একটা গফ দে!",
            "মেনশন দিস না, তহিদুল অনেক বিজি 🥵🥀🤐",
            "চুমু খাওয়ার বয়সটা চকলেট 🍫 খেয়ে উড়িয়ে দিলাম 🤗"
          ];
          return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
        }
      }
    }
  }
};

module.exports.run = async function({}) {};