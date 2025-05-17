
function formatter(article) {
    return [
    `${article.source}`,
    `[${article.title}](${article.link})`,
   `${article.pubDate}`
].join('\n')};

export default formatter;