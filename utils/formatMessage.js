
function formatter(article) {
    return `
    *${article.sourse}*
    ${article.title}
    ${article.pubDate}
    ${article.link}`
    .trim()
};

export default formatter;