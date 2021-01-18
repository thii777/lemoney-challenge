const AdvertisersRepository = require("../../infra/repository/Advertisers.repository");
const { isValidFields } = require("../validator/validField");

class AdvertisersService {
  async store({ payload }) {
    const validField = await isValidFields(payload, ["advertiser_name"]);

    if (validField.error) return validField;

    const [checkAdvertiserName] = await AdvertisersRepository.getByName(payload);
    if (checkAdvertiserName) return { checkAdvertiserName: true };

    return await AdvertisersRepository.store({ payload });
  }

  async getByName({ payload }) {
    return await AdvertisersRepository.getByName(payload);
  }
}

module.exports = new AdvertisersService();
