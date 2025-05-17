import axios from 'axios';
import { TELEGRAM_TOKEN } from '../config/config.js';
import { fetchTelegramId } from '../DataBase/querises.js';
import parsFeedsAndFetchData from '../Rss/fetchfeeds.js';

async function run() {
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    const channels = await fetchTelegramId();
    const message = await parsFeedsAndFetchData();

    for (const {channel_id} of channels) {
        try {
            const respons = await axios.post(url,{
            chat_id:channel_id,
            text:message,
            parse_mode: 'Markdown'
            });
            if (respons.data.ok) {
                console.log("ok")
            }else {
                console.error("error",response.data.description)
            }
        }catch(error){
            console.error( `Axios error:`, error.response?.data || error.message)
        }
    }
}

export default run;