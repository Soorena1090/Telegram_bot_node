import TelegramBot from "node-telegram-bot-api";
import { fetchTelegramId } from "../DataBase/querises.js";
import { TELEGRAM_TOKEN } from "../config/config.js";
import parsFeedsAndFetchData from "../Rss/fetchfeeds.js";

async function sendMessage() {
    const bot = new TelegramBot(TELEGRAM_TOKEN,{ polling : true});
    bot.onText(/\/list/, async(msg) => {
        const chanels = await fetchTelegramId();
        const message = await parsFeedsAndFetchData();
        for(const channel of chanels) {
            const channelId = channel.channel_id
            await bot.sendMessage( channelId, message, {parse_mode:'Markdown'});
        };
});
};
export default sendMessage;