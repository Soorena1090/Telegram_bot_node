// import fetchRssFeeds from "./DataBase/querises.js";
// import parsFeedsAndFetchData from "./Rss/fetchfeeds.js";
// import formatMessage from "./utils/formatMessage.js";

// formatMessage();
// // fetchRssFeeds();
// parsFeedsAndFetchData();
import {TELEGRAM_TOKEN} from './config/config.js'
import TelegramBot from 'node-telegram-bot-api';

// توکن باتت رو اینجا بذار
const token = TELEGRAM_TOKEN;

// ساخت بات در حالت polling
const bot = new TelegramBot(token, { polling: true });

// وقتی پیامی دریافت شد
bot.on('message', (msg) => {
  console.log('📥 New message received!');
  console.log('👤 From:', msg.chat.title || msg.chat.username || msg.chat.first_name);
  console.log('🆔 Chat ID:', msg.chat.id);
});