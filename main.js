const { Telegraf } = require('telegraf');

const bot = new Telegraf('1714445209:AAF1kI2Wu_aqqeCWBrhtDkVr96hVnWa_5P4')

bot.start( ctx => ctx.reply(`
    Привет ${ctx.from.first_name}! 
    Это мой первый тестовый бот, все, что он делает - это повторяет те слова, что ты написал
`))

bot.on('text', async (ctx) => {
    try {
        const userText = ctx.message.text
        // const covidData = await covidApi.getReportsByCountries(userText)
        // const countryData = covidData[0][0]
        // const formatData = `
        //     Страна: ${countryData.country},
        //     Случаи: ${countryData.cases},
        //     Смерти: ${countryData.deaths},
        //     Выздоровело: ${countryData.recovered}`
        ctx.reply(userText)
    } catch(e) {
        ctx.reply('Что-то пошло не так')
    }
})
bot.launch()