
function formatter(article) {
    return [
    `${article.source}`,
    `[${article.title}](${article.link})`,
   `${article.pubDate}`
]};

export default formatter;