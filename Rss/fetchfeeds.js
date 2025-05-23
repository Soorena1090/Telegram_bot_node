import Parser from "rss-parser";
import {fetchRssFeeds} from "../DataBase/querises.js";
import formatter from "../utils/formatMessage.js";

const parser = new Parser();
async function parsFeedsAndFetchData() {
    const feeds = await fetchRssFeeds(); 

    const Items = [];

    for (const feed of feeds ) {
        const url = feed.rss_url;
        try {
        const parsed = await parser.parseURL(url);
        parsed.items.map(item => {
            Items.push({
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                contentSnippet: item.contentSnippet,
                source: parsed.title
            });
        });
    }catch (error) {
        console.error(error);
    };
    };
    const formatted = Items.map(item => formatter(item));
    return formatted;
};

export default parsFeedsAndFetchData;