function defineUrl(news) {
  let url = news.title.toLowerCase();
  let fullDate = news.publishedAt;
  let date = [
    fullDate.getFullYear(),
    fullDate.getMonth() + 1,
    fullDate.getDate()
  ];
  let parsedDate = date
    .map(value => {
      if (value > 9) {
        return value;
      }
      return "0" + value;
    })
    .join("-");

  url =
  parsedDate +
    "--" +
    url
      .replace(/[^a-z\s]/g, "")
      .replace(/\s/g, "-")
      .replace(/-{2,}/g, "-");
  return url;
}
module.exports = defineUrl;
