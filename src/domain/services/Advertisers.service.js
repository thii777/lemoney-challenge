const AdvertisersRepository = require("../../infra/repository/Advertisers.repository");
const { isValidFields } = require("../validator/validField");

class AdvertisersService {
  async store({ payload }) {
    const validField = await isValidFields(payload, ["advertiser_name"]);

    if (validField.error) return validField;

    return await AdvertisersRepository.store({ payload });
  }
}

module.exports = new AdvertisersService();
