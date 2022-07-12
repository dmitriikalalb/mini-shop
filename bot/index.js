const { Telegraf } = require("telegraf");
const token = '5420165182:AAGTtpV6KmglpWoSQZJ2OUFU3nk9ToWjNv0'
const bot = new Telegraf(token)

const web_link = "https://www.google.ru/";

bot.start((ctx) =>
    ctx.reply("Добро пожаловать в мини-магазин", {
        reply_markup: {
            keyboard: [[{ text: "Веб приложение", web_app: { url: web_link } }]],
        },
    })
);

bot.launch();
