const OffersRepository = require("../../infra/repository/Offers.repository");
const { isValidFields } = require("../validator/validField");
const validOffers = require("../../helpers/valid-offers.helper");

class OffersService {
  async store({ payload }) {
    const validField = await isValidFields(payload, ["url", "description"]);

    if (validField.error) return validField;

    return await OffersRepository.store({ payload });
  }

  async list({ page }) {
    let offers = await OffersRepository.list({ page });

    let { enable } = await validOffers(offers);

    return enable;
  }
}

module.exports = new OffersService();
