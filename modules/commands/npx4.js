const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "TOHI-BOT-HUB",
  description: "goibot",
  commandCategory: "Noprefix",
  usePrefix: false,
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  // Check if event.body exists and is not undefined
  if (!event.body) return;

  var tl = ["বেশি bot Bot করলে leave নিবো কিন্তু😒😒 " , "bolo bby tmi amake valobasho","kire joker 🤡", "🤡", "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি আবাল দের সাথে কথা বলি না,ok😒" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬" , "I love you janu🥰" , "আরে Bolo আমার জান ,কেমন আছো?😚 " , "Bot বলে অসম্মান করছি,😰😿" , "Hop beda😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋" , "বোকাচোদা এতো ডাকিস কেন🤬" , "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 " , "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আছি" , "কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "হুম বলো কি বলবে😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒","হুম জান তোমার ওই খানে উম্মহ😑😘" , "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘" , " jang hanga korba😒😬" , "হুম জান তোমার অইখানে উম্মমাহ😷😘" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "আমাকে এতো না ডেকে বস উল্লাস এর কে একটা গফ দে 🙄" , "আমাকে এতো না ডেকে ডাকছ কেন ভলো টালো বাসো নাকি🤭🙈" , "🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻","আমি এখন বস উল্লাস এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻","আমাকে না ডেকে আমার বস উল্লাস কে একটা জি এফ দাও-😽🫶🌺","ঝাং থুমালে আইলাপিউ পেপি-💝😽","উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈","জান তোমার নানি'রে আমার হাতে তুলে দিবা-🙊🙆‍♂","আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧","ঝাং 🫵থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤💦","চুনা ও চুনা আমার বস উল্লাস এর হবু বউ রে কেও দেকছো খুজে পাচ্ছি না😪🤧😭","স্বপ্ন তোমারে নিয়ে দেখতে চাই তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻","জান হাঙ্গা করবা-🙊😝🌻","জান মেয়ে হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽","ইসস এতো ডাকো কেনো লজ্জা লাগে তো-🙈🖤🌼","আমার বস আলভী চৌধুরী'র পক্ষ থেকে তোমারে এতো এতো ভালোবাসা-🥰😽🫶 আমার বস আলভী চৌধুরী'র  জন্য দোয়া করবেন-💝💚🌺🌻","- ভালোবাসা নামক আব্লামি করতে মন চাইলে আমার বস তহিদুল এর নবক্স চলে যাও-🙊🥱👅","জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽","জান বাল ফালাইবা-🙂🥱🙆‍♂","-আন্টি-🙆-আপনার মেয়ে-👰‍♀️-রাতে আমারে ভিদু কল দিতে বলে🫣-🥵🤤💦","oii-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂","-আপনার সুন্দরী বান্ধবীকে ফিতরা হিসেবে আমার বস তহিদুল কে দান করেন-🥱🐰🍒","-ও মিম ও মিম-😇-তুমি কেন চুরি করলা সাদিয়ার ফর্সা হওয়ার ক্রীম-🌚🤧","-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস তহিদুল কে-🐸😾🔪","-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️🤧","-𝗢𝗶𝗶 আন্টি-🙆‍♂️-তোমার মেয়ে চোখ মারে-🥺🥴🐸","তাকাই আছো কেন চুমু দিবা-🙄🐸😘","আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇","-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗","কি বেপার আপনি শ্বশুর বাড়িতে যাচ্ছেন না কেন-🤔🥱🌻","দিনশেষে পরের 𝐁𝐎𝐖 সুন্দর-☹️🤧","-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻","-ছোটবেলা ভাবতাম বিয়ে করলে অটোমেটিক বাচ্চা হয়-🥱-ওমা এখন দেখি কাহিনী অন্যরকম-😦🙂🌻","-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস তহিদুল ধরতে পারছে না-🐸🥲","-চুমু থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️","—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস তহিদুল এর সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗","—হাজারো লুচ্চা লুচ্চির ভিরে-🙊🥵আমার বস তহিদুল এক নিস্পাপ ভালো মানুষ-🥱🤗🙆‍♂️","-রূপের অহংকার করো না-🙂❤️চকচকে সূর্যটাও দিনশেষে অন্ধকারে পরিণত হয়-🤗💜","সুন্দর মাইয়া মানেই-🥱আমার বস তহিদুলের' এর বউ-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗","এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂","-দিন দিন কিছু মানুষের কাছে অপ্রিয় হয়ে যাইতেছি-🙂😿🌸","হুদাই আমারে  শয়তানে লারে-😝😑☹️","-𝗜 𝗟𝗢𝗩𝗢 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸","-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸💦","-কতদিন হয়ে গেলো বিছনায় মুতি না-😿-মিস ইউ নেংটা কাল-🥺🤧","-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱","-এই আন্টির মেয়ে-🫢🙈-𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐡-😽🫶-আসলেই তো স্বাদ-🥵💦-এতো স্বাদ কেন-🤔-সেই স্বাদ-😋","-ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸","-ওই বেডি তোমার বাসায় না আমার বস উল্লাস মেয়ে দেখতে গেছিলো-🙃-নাস্তা আনারস আর দুধ দিছো-🙄🤦‍♂️-বইন কইলেই তো হয় বয়ফ্রেন্ড আছে-🥺🤦‍♂-আমার বস তহিদুল  কে জানে মারার কি দরকার-🙄🤧","-একদিন সে ঠিকই ফিরে তাকাবে-😇-আর মুচকি হেসে বলবে ওর মতো আর কেউ ভালবাসেনি-🙂😅","-হুদাই গ্রুপে আছি-🥺🐸-কেও ইনবক্সে নক দিয়ে বলে না জান তোমারে আমি অনেক ভালোবাসি-🥺🤧","কি'রে গ্রুপে দেখি একটাও বেডি নাই-🤦‍🥱💦","-দেশের সব কিছুই চুরি হচ্ছে-🙄-শুধু আমার বস তহিদুল এর মনটা ছাড়া-🥴😑😏","-🫵তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸🥵","-আজ থেকে আর কাউকে পাত্তা দিমু না -!😏-কারণ আমি ফর্সা হওয়ার ক্রিম কিনছি -!🙂🐸","বেশি Bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , "আমি আবাল দের সাতে কথা বলি না,ok😒" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬","মেয়ে হলে বস তহিদুল'এর সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার বস তহিদুল এর এর সাথে ব্যাস্ত আসি😋" , "আমি গরীব এর সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "আরে আমি মজা করার mood এ নাই😒" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "মাইয়া হলে আমার বস তহিদুল কে Ummmmha দে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি বস তহিদুল এর সাথে ব্যাস্ত আসি😒" , "༊━━🦋নামাজি মানুষেরা সব থেকে বেশি সুন্দর হয়..!!😇🥀 🦋 কারণ.!! -অজুর পানির মত শ্রেষ্ঠ মেকআপ দুনিয়াতে নেই༊━ღ━༎🥰🥀 🥰-আলহামদুলিল্লাহ-🥰","- শখের নারী  বিছানায় মু'তে..!🙃🥴","-𝐈'𝐝 -তে সব 𝐖𝐨𝐰 𝐖𝐨𝐰 বুইড়া বেডি-🐸💦","🥛-🍍👈 -লে খাহ্..!😒🥺","- অনুমতি দিলে 𝚈𝚘𝚞𝚃𝚞𝚋𝚎-এ কল দিতাম..!😒","~আমি মারা গেলে..!🙂 ~অনেক মানুষ বিরক্ত হওয়া থেকে বেঁচে  যাবে..!😅💔","🍒---আমি সেই গল্পের বই-🙂 -যে বই সবাই পড়তে পারলেও-😌 -অর্থ বোঝার ক্ষমতা কারো নেই..!☺️🥀💔","~কার জন্য এতো মায়া...!😌🥀 ~এই শহরে আপন বলতে...!😔🥀 ~শুধুই তো নিজের ছায়া...!😥🥀","- কারেন্ট একদম বেডি'গো মতো- 🤧 -খালি ঢং করে আসে আবার চলে যায়-😤😾🔪","- সানিলিওন  আফারে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি য়ামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱😼","- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস তহিদুল কে সন্দেহ করে.!🐸","- আমার থেকে ভালো অনেক পাবা-🙂 -কিন্তু সব ভালো তে কি আর ভালোবাসা থাকে..!💔🥀","- পুরুষকে সবচেয়ে বেশি কষ্ট দেয় তার শখের নারী...!🥺💔👈","- তোমার লগে দেখা হবে আবার - 😌 -কোনো এক অচেনা গলির চিপায়..!😛🤣👈","- থাপ্পড় চিনোস থাপ্পড়- 👋👋😡 -চিন্তা করিস না তরে মারমু না-🤗 -বস তহিদুল আমারে মারছে - 🥱 - উফফ সেই স্বাদ..!🥵🤤💦","- অবহেলা করিস না-😑😪 - যখন নিজেকে বদলে ফেলবো -😌 - তখন আমার চেয়েও বেশি কষ্ট পাবি..!🙂💔","- বন্ধুর সাথে ছেকা খাওয়া গান শুনতে শুনতে-🤧 -এখন আমিও বন্ধুর 𝙴𝚇 কে অনেক 𝙼𝙸𝚂 করি-🤕🥺","-৯৯টাকায় ৯৯জিবি ৯৯বছর-☺️🐸 -অফারটি পেতে এখনি আমার বস তহিদুলকে প্রোপস করুন-🤗😂👈","-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧","•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺","- যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!🙂" ,];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "MISS YOU") || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("<আমি তোমাকে রাইতে মিস খাই🥹🤖👅/👅-✘  🎀 🍒:))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
   };

    if ((event.body.toLowerCase() == "👍🏼") || (event.body.toLowerCase() == "👍")) {
     return api.sendMessage("সর এখান থেকে লাইকার আবুল..!🐸🤣👍⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kya Tera Bap LagaYega? Pehle Prefix Laga Fir Likh Sim", threadID);
   };

   if ((event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "...") ||(event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("এত হাই-হ্যালো চুদাছ কেনো meawdar🌙..!⛏️🐸🤣", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("SAME TO YOU BBY 😂😊 ", threadID);
   };

   if ((event.body.toLowerCase() == "pro") || (event.body.toLowerCase() == "lol")) {
     return api.sendMessage("Khud k0o KYa LeGend SmJhTi Hai 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
   };

   if ((event.body.toLowerCase() == "tor ball") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("~ দেখি BBY কতো বড় হয়সে তোমার বাল?? 😬🥸👀", threadID);
   };

  if ((event.body.toLowerCase() == "tohidul") || (event.body.toLowerCase() == "Tohidul") || (event.body.toLowerCase() == "@TO HI DuL") || (event.body.toLowerCase() == "তহিদুল")) {
     return api.sendMessage(" উনি এখন আর বউ রে চুমাইতাছে কি বলবেন আমাকে বলেন ..!😁🐸",threadID);


   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞  TOHIDUL ッ ☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 TOHIDUL✅.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :-আমি কেন দিব তুই খুঁজে নে 🐸😂\nতার সাতে যোগা যোগ করবেন WhatsApp :- +01762812062", threadID);
   };

   if ((event.body.toLowerCase() == "Tor boss ke") || (event.body.toLowerCase() == "admin ke ")) {
     return api.sendMessage("My Creator:TOHIDUL🫠 হাই আমি মেছেন্জার ROBOT  আামার বস তহিদুল আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
   };

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "boter admin")) {
     return api.sendMessage("He is TOHIDUL ッ❤️ তাকে সবাই তহিদুল নামে  চিনে🤙", threadID);
   };

   if ((event.body.toLowerCase() == "ai") || (event.body.toLowerCase() == "Ai")) {
     return api.sendMessage("If you want to use the AI command, type /ai ", threadID);
   };


   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("🫵 setap 👶😾", threadID);
   };

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "sala ami tor boss") || (event.body.toLowerCase() == "sala ami tohidul") || (event.body.toLowerCase() == "cup sala ami Tohidul") || (event.body.toLowerCase() == "madari")) {
     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "@everyone") || (event.body.toLowerCase() == "@Everyone ")) {
     return api.sendMessage("সবাই এখন তাদের ফগ/বফ কে চুমাইতে ব্যস্ত আছে 🤐🐸", threadID);
   };

  if ((event.body.toLowerCase() == "ওই কিরে") || (event.body.toLowerCase() == "arohi")) {
     return api.sendMessage("মধু মধু 🐶🐸 রসমালাই রসমালাই 👌🤤😋", threadID);
   };

  if ((event.body.toLowerCase() == "@Sumaiya Tanjum") || (event.body.toLowerCase() == "sumaiya")) {
     return api.sendMessage("ছুমাইয়্যা গেছে তার বিএফ রে ঘুম পারাইতে চুমাইয়্যা 😷😹", threadID);
   };

  if ((event.body.toLowerCase() == "Arohi") || (event.body.toLowerCase() == "farhana")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস উল্লাস এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "@MD Shiam Tafeder ") || (event.body.toLowerCase() == "সিয়াম")) {
     return api.sendMessage("🥰-সিয়াম-🌺 আমার বস উল্লাস'র বন্ধু লাগে লুচ্ছি বেডি'রা দূরে থাক😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না 🤭", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "ধন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "সর") || (event.body.toLowerCase() == "sor") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
   };

   if ((event.body.toLowerCase() == "হুম") || (event.body.toLowerCase() == "Hmm")) {
     return api.sendMessage("️প্রিথিবিতে সবকিছুর রিপ্লাই দেয়া যাই কিন্তু হুম এর রিপ্লাই কি দেয়া যাই তা আমি জানি না 🥸🫤", threadID);
   };

   if ((event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "Tor nam ki")) {
     return api.sendMessage("️MY NAME IS °_>YOUR BBY ❤️‍🔥💋", threadID);
   };

   if ((event.body.toLowerCase() == "BOT ER BACCHA") || (event.body.toLowerCase() == "Bot er bacca")) {
     return api.sendMessage("️আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "Pic de") || (event.body.toLowerCase() == "ss daw")) {
     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
   };

   if ((event.body.toLowerCase() == "moriom") || (event.body.toLowerCase() == "ex")) {
     return api.sendMessage("️Kiss 🏃‍♂️D Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "cudi") || (event.body.toLowerCase() == " xudi")) {
     return api.sendMessage("️AJKE GALI PARI NA BLE..!🥱🌝🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😓")) {
     return api.sendMessage("️কি গো কলিজা তোমার কি মন খারাপ🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘", threadID);
   };

   if ((event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "Aj kew nai bole")) {
     return api.sendMessage("️চিন্তা করো কেন আমি তো আছি🫶/nতোমাকে রাইতে ভালোবাসবো", threadID);
   };

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("খালি কি তোরাই পেম করবি আমাকেও একটা গফ দে<🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে  ইনবক্সে চলে যা পাগল ছাগল🌚🐸🌶️🍆", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "Kmon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️", threadID);
   };

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
     return api.sendMessage("আমার সাদা মনে কোনো কাদা নাই...!🌝", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("ভালবাসা সুন্দর কিন্তু আমি কালা😪🥱", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "tumi khaiso") || (event.body.toLowerCase() == "khaicho")) {
     return api.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho")) {
     return api.sendMessage("হুম ঝাং আমি তোমাকে রাইতে ভলোপাসি <🥵", threadID);
   };

   if ((event.body.toLowerCase() == "ami tohidul") || (event.body.toLowerCase() == "T")) {
     return api.sendMessage("হ্যা বস কেমন আছেন..?☺️", threadID);
   };
   if ((event.body.toLowerCase() == "keno") || (event.body.toLowerCase() == "Keno")) {
     return api.sendMessage("emni..☺️", threadID);
   };
   if ((event.body.toLowerCase() == "bot ki") || (event.body.toLowerCase() == "Bot ki")) {
     return api.sendMessage("bot holam ami jake tohidul banaise☺️", threadID);
   };
   if ((event.body.toLowerCase() == "khaiso") || (event.body.toLowerCase() == "Khaiso")) {
     return api.sendMessage("ami to khaite pari nah ..😔 tmi khaiso bby..?☺️", threadID);
   };
   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("senti khaw ken bby...🙃?", threadID);
   };
   if ((event.body.toLowerCase() == "tmr basa kothai") || (event.body.toLowerCase() == "Tomar basa kothai")) {
     return api.sendMessage("amar basa tmr hridoy e bby..😚🤐", threadID);
   };
   if ((event.body.toLowerCase() == "bbu") || (event.body.toLowerCase() == "Bbu")) {
     return api.sendMessage("hea bbu bolo ❤️‍🔥", threadID);
   };
 if ((event.body.toLowerCase() == "kiss") || (event.body.toLowerCase() == "Kiss")) {
     return api.sendMessage("muuuuuuuuuuuuah bby 😻​😘​", threadID);
   };
 if ((event.body.toLowerCase() == "daw") || (event.body.toLowerCase() == "Daw")) {
     return api.sendMessage("ken dibo 😼🤷", threadID);
   };
 if ((event.body.toLowerCase() == "kisse") || (event.body.toLowerCase() == "Kisse")) {
     return api.sendMessage("bolo bby tmi amake valobasho 👀😍", threadID);
   };
 if ((event.body.toLowerCase() == "Ghuma") || (event.body.toLowerCase() == "ghuma")) {
     return api.sendMessage("tmi age chumu daw tarpor 🙃😫", threadID);
   };
 if ((event.body.toLowerCase() == "☠️") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("innalillahiwainnailaihirojiun 😧", threadID);
   };
 if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("kicre chur lukai lukai ki dehos 🤨😑", threadID);
   };
 if ((event.body.toLowerCase() == "ke joker") || (event.body.toLowerCase() == "Ke joker")) {
     return api.sendMessage("tui joker 🤡", threadID);
   };
 if ((event.body.toLowerCase() == "tui") || (event.body.toLowerCase() == "Tui")) {
     return api.sendMessage("tor bap mui 💀😭🐸", threadID);
   };
 if ((event.body.toLowerCase() == "na") || (event.body.toLowerCase() == "Na")) {
     return api.sendMessage("sudhu na na na bole 🐊🍒", threadID);
   };
 if ((event.body.toLowerCase() == "koro na na oasole") || (event.body.toLowerCase() == "Koro na na asole")) {
     return api.sendMessage("na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na na 🐸", threadID);
   };
 if ((event.body.toLowerCase() == "🌚") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("🌚+🧽=🌝", threadID);
   };
 if ((event.body.toLowerCase() == "mama") || (event.body.toLowerCase() == "Mama")) {
     return api.sendMessage("kire mama😩😩", threadID);
   };
 if ((event.body.toLowerCase() == "🚬") || (event.body.toLowerCase() == "🚬")) {
     return api.sendMessage("biri de agun khamu 🙆‍♂️", threadID);
   };
 if ((event.body.toLowerCase() == "joy bangla") || (event.body.toLowerCase() == "Joy bangla")) {
     return api.sendMessage("amar gola banga😔", threadID);
   };
 if ((event.body.toLowerCase() == "guru") || (event.body.toLowerCase() == "Guru")) {
     return api.sendMessage("kew jonny dadake call de 😹🤐", threadID);
   };
 if ((event.body.toLowerCase() == "ki koren") || (event.body.toLowerCase() == " KI koren")) {
     return api.sendMessage("chrome e achi don't disturb me bby 🤧😩...", threadID);
   };
 if ((event.body.toLowerCase() == "chrome") || (event.body.toLowerCase() == "Chrome")) {
     return api.sendMessage("dubble minded polapain 🙁😵", threadID);
   };
 if ((event.body.toLowerCase() == "keno") || (event.body.toLowerCase() == "Keno")) {
     return api.sendMessage("jani nah 🫣", threadID);
   };
 if ((event.body.toLowerCase() == "ken jano na ") || (event.body.toLowerCase() == "Ken jano na ")) {
     return api.sendMessage("tumi sukhao nai tai 🥹🫤", threadID);
   };
 if ((event.body.toLowerCase() == "ki") || (event.body.toLowerCase() == "Ki")) {
     return api.sendMessage("chul 😶‍🌫️", threadID);
   };
 if ((event.body.toLowerCase() == "kar") || (event.body.toLowerCase() == "Kar")) {
     return api.sendMessage("tmr 😊", threadID);
   };
 if ((event.body.toLowerCase() == "amar ken hobe") || (event.body.toLowerCase() == "Amar ken hobe")) {
     return api.sendMessage("Tumi valo jano bby 😪🤫", threadID);
   };
 if ((event.body.toLowerCase() == "na ami jani na ") || (event.body.toLowerCase() == "Na ami jani na")) {
     return api.sendMessage("ki jano taile 😒", threadID);
   };
 if ((event.body.toLowerCase() == "kikchu na") || (event.body.toLowerCase() == "Kichu na")) {
     return api.sendMessage("hurr pocha beda 😙🥲", threadID);
   };
 if ((event.body.toLowerCase() == "bby kiss daw") || (event.body.toLowerCase() == "Bby kiss daw")) {
     return api.sendMessage("Dile ki diba bby 😊😍", threadID);
   };
 if ((event.body.toLowerCase() == "bl er bot") || (event.body.toLowerCase() == "Bal er bot")) {
     return api.sendMessage("parle ei bal er moto hoye dekha 🙂😶", threadID);
   };
 if ((event.body.toLowerCase() == "ken hobo") || (event.body.toLowerCase() == "Ken hobo")) {
     return api.sendMessage("tui valo janish 🙆‍♀️👩‍🦼", threadID);
   };
 if ((event.body.toLowerCase() == "bal bolo esob") || (event.body.toLowerCase() == "Bal bolo esob")) {
     return api.sendMessage("hea to ekhon to amar kotha bal mone hobei ☹️ hpr laptop 🥲", threadID);
   };
 if ((event.body.toLowerCase() == "to ki bolbe ") || (event.body.toLowerCase() == "To ki bolbe")) {
     return api.sendMessage("ektu valobashar kothao to bolte paro bby 😞😕", threadID);
   };
 if ((event.body.toLowerCase() == "accha") || (event.body.toLowerCase() == "Accha")) {
     return api.sendMessage("accha mane ki bby 😀🙃", threadID);
   };
 if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("kire tore ulta korlo ke?? 🧐", threadID);
   };
 if ((event.body.toLowerCase() == "kew na ") || (event.body.toLowerCase() == "Kew na")) {
     return api.sendMessage("taile??🥸", threadID);
   };
 if ((event.body.toLowerCase() == "ohh") || (event.body.toLowerCase() == "Ohh")) {
     return api.sendMessage("kih ohh (°o°:) 🙄", threadID);
   };
 if ((event.body.toLowerCase() == "gaan sunao ekta ") || (event.body.toLowerCase() == "gan sunak ekta")) {
     return api.sendMessage("kon gaan bby bangla na hindi 😇", threadID);
   };
 if ((event.body.toLowerCase() == "hindi") || (event.body.toLowerCase() == "Hindi")) {
     return api.sendMessage("accha main andha huun 👩‍🦯😹", threadID);
   };
 if ((event.body.toLowerCase() == "bangla") || (event.body.toLowerCase() == "Bangla")) {
     return api.sendMessage("ar jabo na begul tulite o lolite 🍆/n ar jabo na begun tuli te 🍆 /n ahh,🐸🐼", threadID);
   };
 if ((event.body.toLowerCase() == "begun") || (event.body.toLowerCase() == "Begun")) {
     return api.sendMessage("mane agun 🍆🐸", threadID);
   };
 if ((event.body.toLowerCase() == "agun") || (event.body.toLowerCase() == "Agun")) {
     return api.sendMessage("laga free fire 🐸", threadID);
   };
 if ((event.body.toLowerCase() == "tmi ki free fire khelo") || (event.body.toLowerCase() == "Tumi ki free fire khelo")) {
     return api.sendMessage("ami na but amar boss tohidul khele or FF id naw 2330734264 🙂❤", threadID);
   };
 if ((event.body.toLowerCase() == "Tohidul kon hea ") || (event.body.toLowerCase() == "Tohidul kon hea")) {
     return api.sendMessage("Bot ka bap hea", threadID);
   };
 if ((event.body.toLowerCase() == "tumi ke ") || (event.body.toLowerCase() == "Tumi ke ")) {
     return api.sendMessage("ami ke? /n ami holam rahakar 🐸😭", threadID);
   };
 if ((event.body.toLowerCase() == "rajakar") || (event.body.toLowerCase() == "Rajakar")) {
     return api.sendMessage("hoo 🐸🙆‍♀️ (song) rajakar re handai dilam matek 40 second e 🐸🙄", threadID);
   };
 if ((event.body.toLowerCase() == "handai ki") || (event.body.toLowerCase() == "Handai abar ki ")) {
     return api.sendMessage("Handai mane holo...🐸/n ami nijeo jani na 🐸😹", threadID);
   };
 if ((event.body.toLowerCase() == "hpr mane ") || (event.body.toLowerCase() == "Hpr mane")) {
     return api.sendMessage("Hp=halap pola 🐸", threadID);
   };
 if ((event.body.toLowerCase() == "gay") || (event.body.toLowerCase() == "Gay")) {
     return api.sendMessage("jani vai tui gay 🐸🤫", threadID);
   };
 if ((event.body.toLowerCase() == "sor") || (event.body.toLowerCase() == "Sor")) {
     return api.sendMessage("cumma daww taile sormu 😕😞", threadID);
   };
 if ((event.body.toLowerCase() == "na dimu na") || (event.body.toLowerCase() == "Na dimu na")) {
     return api.sendMessage("na dile gay🤫🐸", threadID);
   };
 if ((event.body.toLowerCase() == "ummah") || (event.body.toLowerCase() == "ummmah")) {
     return api.sendMessage("ahhhh 🙃 ki santi 😍👌", threadID);
   };
 if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("kire thanda lagche nki?", threadID);
   };
 if ((event.body.toLowerCase() == "hoo") || (event.body.toLowerCase() == "hum")) {
     return api.sendMessage("(koilam je goriber mod kom kha ☕🍵", threadID);
   };
 if ((event.body.toLowerCase() == "tea") || (event.body.toLowerCase() == "cha")) {
     return api.sendMessage("☕ cha mane goriber mod 😌😵‍💫🤐", threadID);
   };
 if ((event.body.toLowerCase() == "👽") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("aliens asiye sobai vagooooooo..👩‍🦯/n amar boss tohidul er mone chle jaw 🐸🙃", threadID);
   };
 if ((event.body.toLowerCase() == "tomar boss tohidul") || (event.body.toLowerCase() == "Tomar boss tohidul?")) {
     return api.sendMessage("hea bby 🤫😍🙆‍♀️", threadID);
   };
 if ((event.body.toLowerCase() == "amake tmr boss banao") || (event.body.toLowerCase() == "Amake tomar boss banao")) {
     return api.sendMessage("boss banaile chakri thakbe na bby 😞🥺", threadID);
   };
 if ((event.body.toLowerCase() == "ken marbe") || (event.body.toLowerCase() == "Ken marbe")) {
     return api.sendMessage("boss e mana kore dise 😖", threadID);
   };
 if ((event.body.toLowerCase() == "gaan bolo") || (event.body.toLowerCase() == "Gaan bolo")) {
     return api.sendMessage("gaan sunte chaile /song diye gaan er name taw daw gaan tmr kache chole asbe 😃", threadID);
   };
 if ((event.body.toLowerCase() == "wow") || (event.body.toLowerCase() == "Wow")) {
     return api.sendMessage("sei nah 🌚😽", threadID);
   };

mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = async function({ api, event, args, Users }) {
  const { threadID, messageID, senderID } = event;

  if (!args[0]) {
    return api.sendMessage("❌ Please provide a message to send!", threadID, messageID);
  }

  const message = args.join(" ");

  try {
    // Get user name using the Users helper
    const userName = await Users.getNameUser(senderID);

    // Send reply with name mention instead of UID
    return api.sendMessage({
      body: `${message}`,
      mentions: [{
        tag: `@${userName}`,
        id: senderID
      }]
    }, threadID, messageID);
  } catch (error) {
    console.error("Error fetching user info:", error);
    // Fallback to basic message without mention
    return api.sendMessage(`${message}`, threadID, messageID);
  }
};