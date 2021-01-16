const OffersRepository = require("../../infra/repository/Offers.repository");
const { isValidFields } = require("../validator/validField");

class OffersService {
  async store({ payload }) {
    const validField = await isValidFields(payload, ["url", "description"]);

    if (validField.error) return validField;

    return await OffersRepository.store({ payload });
  }
}

module.exports = new OffersService();
