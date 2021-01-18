const AdvertisersRepository = require("../../infra/repository/Advertisers.repository");
const OffersRepository = require("../../infra/repository/Offers.repository");
const { isValidFields } = require("../validator/validField");
const validOffers = require("../../helpers/valid-offers.helper");
const ChangeState = require("../../helpers/change-state.helper");

class OffersService {
  async store({ payload }) {
    const validField = await isValidFields(payload, [
      "advertiser_id",
      "url",
      "description",
      "starts_at",
    ]);

    if (validField.error) return validField;

    const [checkAdvertiser] = await AdvertisersRepository.getById(payload);
    if (!checkAdvertiser) return { checkAdvertiser: true };

    return await OffersRepository.store({ payload });
  }

  async list({ page }) {
    const offers = await OffersRepository.list({ page });

    let { enable, disable } = await validOffers(offers);

    await ChangeState.disable(disable, OffersRepository, offers);
    const able = ChangeState.enable(enable, OffersRepository, offers);

    return able;
  }

  async update({ payload, id }) {
    return await OffersRepository.update(payload, id);
  }

  async destroy({ id }) {
    return await OffersRepository.destroy({ id });
  }
}

module.exports = new OffersService();
