const date = require("./date.helper");

module.exports = async (offers) => {
  const currentTime = await date.localDate();

  let enable = [];
  let disable = [];

  for (let offer of offers) {
    let starts_at = await date.offerDate(offer.starts_at);
    let ends_at = await date.offerDate(offer.ends_at);

    if (
      (currentTime.replace(/\D/g, "") >= starts_at.replace(/\D/g, "") &&
        currentTime.replace(/\D/g, "") <= ends_at.replace(/\D/g, "")) ||
      offer.ends_at == null
    ) {
      enable.push(offer);
    }
    if (currentTime.replace(/\D/g, "") >= ends_at.replace(/\D/g, "")) {
      disable.push(offer);
    }
  }

  return { enable, disable };
};
