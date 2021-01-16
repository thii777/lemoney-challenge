const moment = require("moment-timezone");

module.exports = async () => {
  return moment
    .tz(new Date(), "America/Sao_Paulo")
    .format("YYYY-MM-DD HH:mm:ss");
};
