import Telenode from 'telenode-js';
import { TELEGRAM_TOKEN } from '../config/config.js';
import { fetchTelegramId } from '../DataBase/querises.js';
// import parsFeedsAndFetchData from '../Rss/fetchfeeds.js';

const bot = new Telenode({
    apiToken:TELEGRAM_TOKEN
});

async function run() {
    const text = await parsFeedsAndFetchData();
    const channels = await fetchTelegramId();
    for ( const {channel_id} of channels) {
        try {
            await bot.sendTextMessage(channel_id, text)
            console.log(`${channel_id}`,"sucsses");
        }catch(err) {
            console.error(`${channel_id}:`,err.message);
        };
    };
};

export default run;