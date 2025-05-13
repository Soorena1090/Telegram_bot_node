import pool from './index.js'

async function fetchRssFeeds() {
    const client = await pool.connect();
    try {
        const respons = await client.query('SELECT rss_url FROM rss_feeds');
        console.log(respons);
    } finally {
        client.release();
    }
};

export default fetchRssFeeds;
