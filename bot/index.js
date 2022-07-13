const { Telegraf, Markup } = require("telegraf")
const token = '5420165182:AAGTtpV6KmglpWoSQZJ2OUFU3nk9ToWjNv0'
const bot = new Telegraf(token)

const web_link = "https://mini-shop.test.ukrik.com/"

bot.start(async (ctx) => {
  try {
    await ctx.reply('Добро пожаловать в мини-магазин\n\nНажмите на кнопку чтобы сделать свой первый заказ 😊', Markup.inlineKeyboard(
      [
        [Markup.button.webApp('Магазин', web_link)]
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

bot.launch()
