
function formatter(article) {
    return `
    *${article.sourse}*
    ${article.title}
    ${article.pubDate}
    ${article.link}`
    .trim().join('\n')
};

export default formatter;