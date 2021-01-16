const OffersRepository = require("../../infra/repository/Offers.repository");
const { isValidFields } = require("../validator/validField");
const validOffers = require("../../helpers/valid-offers.helper");
const Parallel = require("../../helpers/parallel.helper");
const alterToDisable = require("../../helpers/alter-to-disable");

class OffersService {
  async store({ payload }) {
    const validField = await isValidFields(payload, ["url", "description"]);

    if (validField.error) return validField;

    return await OffersRepository.store({ payload });
  }

  async list({ page }) {
    let offers = await OffersRepository.list({ page });

    let { enable, disable } = await validOffers(offers);

    disable = alterToDisable(disable);
    const parallel = new Parallel({
      items: disable,
      repository: OffersRepository,
      method: "update",
    });
    disable = await parallel.execute(offers);

    return enable;
  }
}

module.exports = new OffersService();
