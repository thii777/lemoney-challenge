const OffersRepository = require("../../infra/repository/Offers.repository");
const { isValidFields } = require("../validator/validField");
const validOffers = require("../../helpers/valid-offers.helper");
const ChangeState = require("../../helpers/change-state.helper");

class OffersService {
  async store({ payload }) {
    const validField = await isValidFields(payload, ["url", "description"]);

    if (validField.error) return validField;

    return await OffersRepository.store({ payload });
  }

  async list({ page }) {
    const offers = await OffersRepository.list({ page });

    let { enable, disable } = await validOffers(offers);

    await ChangeState.disable(disable, OffersRepository, offers);
    const able = ChangeState.enable(enable, OffersRepository, offers);

    return able;
  }
}

module.exports = new OffersService();
