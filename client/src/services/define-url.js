function defineUrl(news) {
  let url = news.title.toLowerCase();
  const fullDate = new Date(news.date);
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
    "/news/" +
    parsedDate +
    "--" +
    url
      .replace(/[^a-z\s]/g, "")
      .replace(/\s/g, "-")
      .replace(/-{2,}/g, "-");
  return url;
}
export { defineUrl };
