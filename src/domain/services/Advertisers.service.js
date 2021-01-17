const AdvertisersRepository = require("../../infra/repository/Advertisers.repository");
const { isValidFields } = require("../validator/validField");

class AdvertisersService {
  async store({ payload }) {
    const validField = await isValidFields(payload, ["advertiser_name"]);

    if (validField.error) return validField;

    const [checkAdvertiserName] = await AdvertisersRepository.get(payload);
    if (checkAdvertiserName) return { checkAdvertiserName: true };

    return await AdvertisersRepository.store({ payload });
  }

  async get({ payload }) {
    return await AdvertisersRepository.get(payload);
  }
}

module.exports = new AdvertisersService();
