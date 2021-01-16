const moment = require("moment-timezone");

class FormatDate {
  offerDate(beforeDate) {
    const parsedDate = moment
      .tz(beforeDate, "America/Sao_Paulo")
      .format("YYYY-MM-DD HH:mm:ss");

    return parsedDate;
  }

  localDate() {
    return moment
      .tz(new Date(), "America/Sao_Paulo")
      .format("YYYY-MM-DD HH:mm:ss");
  }
}

module.exports = new FormatDate();
