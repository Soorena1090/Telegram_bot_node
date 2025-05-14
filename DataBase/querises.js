import pool from './index.js'

async function fetchRssFeeds() {
    const client = await pool.connect();
    try {
        const respons = await client.query('SELECT rss_url FROM rss_feeds');
        return respons.rows;
    } finally {
        client.release();
    }
};

async function fetchTelegramId() {
    const client = await pool.connect();
    try {
        const respons = await client.query('SELECT channel_id FROM telegram_channels')
        return respons.rows;
    }finally {
        client.release()
    };
};

export{ 
    fetchRssFeeds,
    fetchTelegramId
};
