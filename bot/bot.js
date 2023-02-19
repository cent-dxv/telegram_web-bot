const { Telegraf } = require("telegraf");
// const TOKEN = "5153026043:AAEOA6Jgze21I8PGuZWKJoNMGY1Wzl6S5OI";
const TOKEN = "6221163199:AAF4UHhM9EPdHavbr2-mHNswUyYTRifHBlY";
const bot = new Telegraf(TOKEN);

const web_link = "https://resilient-horse-deebb2.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();